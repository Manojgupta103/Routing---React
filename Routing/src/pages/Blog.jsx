// import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Common/Header'
import { blogs } from '../Data/blogs'

export default function Blog() {
    let allBlogs=blogs.map((v,i)=>{
        return(
            <div className='BlogItems' key={i}>
                <h3>{v.title}</h3>
                <p>

                    {v.body}
                </p>
                <button> <Link to={`/blog/${v.id}`}>Read More</Link></button>
            </div>
        )
    })
    return(
    <>
    <Header />
    <h1>Blog Page</h1>
    <div className='Container'>
        {allBlogs}
    </div>
    </>
    )
}
