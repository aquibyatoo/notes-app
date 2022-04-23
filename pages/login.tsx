import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Auth from "../src/features/auth";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const hasUserLoggedIn = req.cookies.isLoggedIn;

  if (hasUserLoggedIn) {
    return {
      redirect: {
        destination: "/",
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
        <title>Login</title>
        <meta name="description" content="A simple notes app" />
      </Head>
      <Auth />
    </>
  );
};

export default Home;
