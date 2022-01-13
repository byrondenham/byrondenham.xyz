import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [name, setName] = useState("person");
  const [bgColor, setBgColor] = useState("ffffff")

  return (
    <>
      <Head>
        <title>Byron Denham</title>
        <style>
          background: #{bgColor}
        </style>
      </Head>
      <h1>Hello, {name}.</h1>
      <h2>What is your name?</h2>
      <input type="text" onChange={e => setName(e.target.value)} />
      <button onClick={() => setBgColor(Math.floor(Math.random() * 16).toString(16).join(""))}>Change colour</button>
    </>
  );
};

export default Home