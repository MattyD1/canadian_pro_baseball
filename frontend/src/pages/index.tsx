import Image from "next/image";
import { Inter } from "next/font/google";

import { App } from "@/components/Layout";

/* Components */
import { Banner } from "@/components/Banner";

/* Utils */
import { GetStaticProps, NextPage } from "next";
import { HomeDocument, HomeQuery } from "@/utils/graphql/generated";
import { request } from "@/utils/request";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  result: HomeQuery;
}

const Home: NextPage<IHomeProps> = ({ result }) => {
  return (
    <App>
      {/* @ts-expect-error */}
      <Banner {...result.home?.pageContent[0]} />
    </App>
  );
};

export const getStaticProps: GetStaticProps<IHomeProps> = async (context) => {
  const result = await request(HomeDocument);

  return {
    props: { result },
  };
};

export default Home;
