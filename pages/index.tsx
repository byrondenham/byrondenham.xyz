import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [name, setName] = useState("person");

  const changeName = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Byron Denham</title>
      </Head>
      <h1>Hello, {name}.</h1>
      <h2>What is your name?</h2>
      <input type="text" onChange={changeName} />
    </>
  );
};

export default Home