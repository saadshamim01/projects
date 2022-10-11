import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session }) {
  if (!session) {
    return <Login />;
  }
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);

  // const docs = posts.docs.map((post) => ({
  //   id: post.id,
  //   ...post.data(),
  //   timestamp: null,
  // }));

  return {
    props: { session, posts: docs },
  };
}
