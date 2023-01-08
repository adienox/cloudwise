import Head from "next/head";

const HeadElement = () => {
  return (
    <Head>
      <title>Cloudwise</title>
      <meta name="description" content="Weather app built with react" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadElement;
