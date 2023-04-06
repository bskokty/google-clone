import Head from "next/head";
import React from "react";
import Header from "./header";

function Search() {
  return (
    <div>
      <Head>
        <title>Search Result</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}

export default Search;
