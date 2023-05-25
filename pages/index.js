import Head from "next/head";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Description from "@/components/Description";
import Selector from "@/components/Selector";
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
      <Header />
      <main className="flex min-h-screen flex-col gap-4 items-center justify-start pb-4">
        <Carousel />
        <Description />
        <Selector/>
      </main>
    </div>
  );
}
