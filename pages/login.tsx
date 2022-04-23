import type { NextPage } from "next";
import Head from "next/head";
import Auth from "../src/features/auth";

export async function getServerSideProps(context: any) {
  const hasUserLoggedIn = context.req.cookies.isLoggedIn;

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
}

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
