import React from 'react'
import { sanityClient, urlFor} from '../../sanity'
import { Post } from '../../typings'
import Header from '../../components/Header'
import { GetStaticProps } from 'next'

interface Props {
    post: Post
  }

function Post( {post}: Props) {
    console.log(post)
  return (
    <main>
        <Header />
    </main>
  )
}

export default Post;

export const getStaticPaths = async () =>{
    const query =`*[_type == 'post']{
        _id,
       slug {
        current
      }
      }`;

    const posts = await sanityClient.fetch(query)

    const paths = posts.map((post: Post) => ({
        //this means im going to directly return an object
        //the first one
        params: {
            //the second one, is going to be the params that matches up to [slug]
            slug: post.slug.current
        },
    }))

    return {
        paths,
        //this will block the page from showing or show a 404 if it doesn't exist
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image
        },
        'comments' : *[_type == "comment" &&
          post._ref == ^._id &&
          approved== true],
        description,
        mainImage,
        slug,
        body
    }`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
    revalidate: 60, // after 60 seconds it will update the old cached version
  
  }
    
}