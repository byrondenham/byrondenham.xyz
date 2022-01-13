import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import crypto from 'crypto';

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
      <button onClick={() => setBgColor(crypto.randomBytes(3).toString("hex"))}>Change colour</button>
    </>
  );
};

export default Home