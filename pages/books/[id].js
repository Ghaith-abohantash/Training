import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import books from "../../data/books";

export async function getStaticPaths() {
  const paths = books.map(book => ({ params: { id: book.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const book = books.find(b => b.id === params.id);
  return { props: { book }, revalidate: 60 };
}

export default function BookPage({ book }) {
  const router = useRouter();
  if (router.isFallback) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{book.title} - Online Book Library</title>
        <meta name="description" content={book.description} />
      </Head>

      <div className="container mx-auto p-6">
        <button onClick={() => router.back()} className="text-blue-500 mb-4">⬅ Back</button>
        <div className="flex flex-col md:flex-row gap-6">
          <Image src={book.image} alt={book.title} width={300} height={400} className="rounded" />
          <div>
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="text-gray-600 mb-2">by {book.author}</p>
            <p className="mb-4">{book.description}</p>
            <p className="text-sm bg-gray-200 inline-block px-3 py-1 rounded">{book.category}</p>
          </div>
        </div>
      </div>
    </>
  );
}
