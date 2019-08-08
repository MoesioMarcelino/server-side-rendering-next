import React from "react";
import styled from "styled-components";

import Head from "next/head";
import Link from "next/link";

import withAnalytics from "../src/hocs/withAnalytics";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <>
    <Head>
      <title>HomePage</title>
    </Head>
    <img src="/static/panda.jpg" alt="panda" width={200} />
    <Title>Hello World!</Title>
    <Link href="/users">
      <a>Users</a>
    </Link>
  </>
);

export default withAnalytics()(Home);
