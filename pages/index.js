import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import books from "../data/books";

export default function Home() {
  return (
    <>
      <Head>
        <title>Online Book Library</title>
        <meta name="description" content="Browse our collection of classic and modern books." />
      </Head>

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center"> Online Book Library</h1>

        <div className="mb-8">
          <Link href="/search">
<button className="  bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg 
  hover:from-blue-600 hover:to-indigo-700 
  hover:scale-105 
  transition-all duration-300 ease-in-out
">              Go to Search Page
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white shadow-lg rounded-lg p-4">
              <Image
                src={book.image}
                alt={book.title}
                width={300}
                height={400}
                className="rounded"
              />
              <h2 className="text-xl font-semibold mt-4">{book.title}</h2>
              <p className="text-gray-600">{book.author}</p>
              <Link href={`/books/${book.id}`} className="text-blue-500 mt-2 inline-block">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
