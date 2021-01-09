import React from 'react'
import Link from 'next/link'
import styled from '../post.module.scss'

const Post = ({id, title, body}) => {
    return ( 
        <>
            <img src={ parseInt(id) < 5 ? "/images/post/"+id+".jpg" : "/images/post/1.jpg"} style={{width:"90%", height:"25vh"}}/>
            <Link href="/posts/[id]" as={"/posts/" + id}>
                <h3 className="mt-3"> 
                    <a> {title} </a> 
                </h3>
            </Link>
            <p>{body}</p>
        </>)
}

export default Post
