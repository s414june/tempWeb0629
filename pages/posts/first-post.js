import Head from 'next/head';
import Link from 'next/link';
export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
}