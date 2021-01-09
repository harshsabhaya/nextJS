import React from "react";
import Post from "./post/post";
import styled from './post.module.scss'

export async function getStaticProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts') 
    const posts =  await res.json();

    return {
        props: {
            posts
        }
    }
}

// export async function getServerSideProps () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts') 
//     const posts =  await res.json();

//     return {
//         props: {
//             posts
//         }
//     }
// }

export default function Posts({posts}) {

    return (
        <ul className="row">
            {posts.map(item => {
                return <li key={item.id} className={"col-md-3 "+ styled.postHeading}>
                    <Post {...item} />
                </li>
            })}
        </ul>
        )
  }
  