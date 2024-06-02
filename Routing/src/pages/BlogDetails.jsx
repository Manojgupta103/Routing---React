// import React from 'react'

import { useLocation } from "react-router-dom"
import Header from "../Common/Header";
import { blogs } from "../Data/blogs";

export default function BlogDetails() {
  let uselocation=useLocation();
  let currentId=(uselocation.pathname.split('/')[2])
  let currentData=blogs.filter((v)=>v.id==currentId)[0]
  console.log(currentData)



  return (
    <div>
      < Header/>
      <h1>{currentData.title}</h1>
      <h1>{currentData.body}</h1>
    </div>
  )
}
