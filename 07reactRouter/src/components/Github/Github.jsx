import React,{useEffect,useState} from 'react'
import {useLoaderData} from 'react'
function Github(){
    const git = useLoaderData()
    const [data, setData] =useState([])
    useEffect (() => {
        fetch ('https://api.github.com/users/gangaadhikari123')
        .then (response => response.json())
        .then (data => {
            console.log(data);
            setData(data)
        })
    }, [])
    return (
        <div className = 'text-center m-4 bd-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
          <img src={data.avatar_url} alt="Git picture" width={300}/>
          </div>
    )
}

export default Github

//export const githubInfoLoader = async () => {
  // const response= awit fetch ('https://api.github.com/users/gangaadhikari123')
   //return response.json()
//}