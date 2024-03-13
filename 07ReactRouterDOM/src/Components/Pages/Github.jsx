import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // primary use of api from component
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rheeturajmishra23')
    //     .then(res => res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className="text-center m-4 bg-gray-600 text-white">
        GitHub Followers : {data.followers}
        <img src={data.avatar_url} width={300}/>
    </div>
  )
}
export default Github

export const githubInfo = async() => {
    const response = await fetch('https://api.github.com/users/rheeturajmishra23')
    return response.json()
}