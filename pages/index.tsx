import Link from "next/link";
import HorizontalMenu from "../components/horizontalMenu";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layuot";
import Header from "../components/header";
import Banner from "../components/banner";
import Container from "../components/container";
import NewsList from "../components/home/newListPost";
import Article from "../interface/type";
import { fetchData } from "../lib/data";
import RightContent from "../components/home/rightContent";



interface Props {
  articles: Article[];
}


export default function Home({ articles }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Chào mừng đến web công nghệ</title>
        </Head>

        <div>
          <Banner />

          <div className="flex">
            <NewsList articles={articles} />
            <RightContent />
          </div>
        </div>
      </Layout>
    </>
  );

}

export async function getStaticProps() {
  const articles = await fetchData();
  return {
    props: {
      articles,
    },
  };
}

