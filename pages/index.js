import React from "react";

import Head from "next/head";
import Link from "next/link";

import withAnalytics from "../src/hocs/withAnalytics";

const Home = () => (
  <>
    <Head>
      <title>HomePage</title>
    </Head>
    <h1>Hello World!</h1>
    <Link href="/users">
      <a>Users</a>
    </Link>
  </>
);

export default withAnalytics()(Home);
