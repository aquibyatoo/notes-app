import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout";
import Notes from "../src/features/notes";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const hasUserLoggedIn = req.cookies.isLoggedIn;

  if (!hasUserLoggedIn) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notes</title>
        <meta name="description" content="A simple notes app" />
      </Head>

      <Layout>
        <Notes />
      </Layout>
    </>
  );
};

export default Home;
