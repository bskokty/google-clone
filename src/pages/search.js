import Head from "next/head";
import React from "react";
import Header from "./header";
import { API_KEY, CONTEXT_KEY } from "./keys";
import SearchResults from "../../components/SearchResults";
import response from "../../Response";

function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Result</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/**Search result */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? response
    : await fetch(
        `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
