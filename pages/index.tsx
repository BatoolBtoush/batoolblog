import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {sanityClient, urlFor} from "../sanity"
import { Post } from '../typings'



interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Batool Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex items-center justify-between py-10 bg-white border-black border-y lg:py-0'>
        <div className='px-10 space-y-5'> 
          <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
             BatoolBlog
            </span> {" "}
            is a place where Batool writes!
            </h1>
          <h2 className= "pt-5 text-2xl font-medium text-black">Join in, you might be interested! </h2>

        </div>
        
        <img className='hidden h-32 md:inline-flex lg:h-full' src="https://i.pinimg.com/564x/00/b3/ed/00b3edcff0577a14ca0355e160b02122.jpg" alt="" />  


      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
   
  const query = `*[_type == "post"] {
    _id,
    title,
    author-> {
     name,
     image
    },
    description,
    mainImage,
    slug
  }`;
  const posts = await sanityClient.fetch(query);
  return{
    props: {
      posts,
    }
  }

}
