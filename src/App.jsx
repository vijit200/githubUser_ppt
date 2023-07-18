import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [searchQuery,setSearchQuery] = useState(null)
  const [result,setResult] = useState(null)

  const fetchData = (user)=>{
    axios.get(`https://api.github.com/users/${user}`).then((res)=>{setResult(res.data)})
  }

  return (
    <>
      <div className="nav">
        <div className="navitem">
          <input className='userId' 
          type="text"
          placeholder='Enter User Id.......'
          onChange={(e)=>{setSearchQuery(e.target.value)}}
          value={searchQuery}
          />
          <button className='submit' onClick={()=>{fetchData(searchQuery)}}>Get Data</button>
        </div>
      </div> 

      {result && (
        <div className='content'>
          
          <img src={result.avatar_url} alt="avtart" className='avatar' />
          
          
          <div className="info">
            <p className="item">
              Name: &nbsp;{result.name}
            </p>
            <p className="item">Portfolio: Portfolio</p>
            <p className="item">Location : &nbsp;{result.location?result.location:"Unknown"}</p>
            <p className="item">Public Repos : {result.public_repos}</p>
            <p className="item">Follower : {result.followers}</p>
            <p className="item">Bio : {result.bio?result.bio:"Not Written"}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default App
