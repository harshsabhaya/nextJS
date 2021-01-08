import React from 'react'
import Link from 'next/link'
import styled from './post.module.scss'

const Post = (props) => {
    const { post } = props
    return ( 
        <li>
            <Link href="/posts/[id]" as={"/posts/" + post.id}>
                <h3 className={styled.postHeading}> 
                    <a> {post.title} </a> 
                </h3>
            </Link>
            <p>{post.body}</p>
        </li>)
}

export default Post
