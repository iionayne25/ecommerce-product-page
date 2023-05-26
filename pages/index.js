import Head from "next/head";
import ParentComponent from "@/components/ParentComponent";
export default function Home() {
  return (
    <div>
      <Head>
        <title>E-Commerce Prouct</title>
        <meta
          name="description"
          content="This is ecommerce product home page"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col justify-center pb-14 xl:h-full xl:justify-start  xl:px-32">
      <ParentComponent/>
      </main>
    </div>
  );
}
