import React from 'react'
import { useRouter } from 'next/router'

const Post =  ({ posts, id }) => {
  const router = useRouter()
  
  if (router.isFallback) {
    return  <div>loading...........</div>
  }
  return <div>
            <img src={ parseInt(id) < 5 ? "/images/post/"+id+".jpg" : "/images/post/1.jpg"} style={{width:"350px", height:"200px"}}/>
            <h3>{ posts.title}</h3> 
            <p>{ posts.body }</p>
          </div>
}

export async function getStaticPaths() {
    const paths = ["/posts/1", "/posts/2"]
  return {paths, fallback: true}
}

export async function getStaticProps ({query, params}) {
  let { id } = query || params
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id) 
  const posts =  await res.json();

  return {
      props: {
          posts,
          id
      }
  }
}

export default Post
