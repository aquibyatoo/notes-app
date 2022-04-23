import type { NextPage, NextPageContext } from "next";
import Head from "next/head";

export async function getServerSideProps(context: any) {
  const hasUserLoggedIn = context.req.cookies.isLoggedIn;

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
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notes</title>
        <meta name="description" content="A simple notes app" />
      </Head>

      <h1>Home</h1>
    </>
  );
};

export default Home;
