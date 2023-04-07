import Head from "next/head";
import Img from "../../images.png";
import Google from "../../google2.png";
import Avatar from "../../components/Avatar";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-grey-700">
        {/** left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Images</p>
        </div>
        {/** rihgt */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-green-100 cursor-pointer" />
          {/** avatar */}
          <Avatar url={Img} />
        </div>
      </header>
      {/** body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src={Google} height={100} width={300} alt=""></Image>
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-q-md rounded-full border border-grey-200 px-5 py-3 item-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-grey-500" />
          <input
            type="text"
            className="flex-grow focus:outline-none"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          {/* eslint-disable */}
          <button className="btn" onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
