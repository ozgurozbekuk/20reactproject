import React, { useEffect, useState } from 'react'
import User from './User.jsx';
import './profilefinder.css'

const ProfileFinder = () => {
    const [profile,setProfile] = useState(null)
    const [userName, setUserName] = useState('');
    const [loading,setLoading] = useState(false)

    
    const fetchProfile =async () => {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        if(data){
            setProfile(data);
            setLoading(false)
            setUserName('')
        }
    }
    
    const handleSubmit = () => {fetchProfile()}
    
    
    useEffect(() => {
        fetchProfile()
    },[])

    if(loading) {
        return <h1>Loading Data Please Wait..</h1>
    }

  return (
    <div className='github-profile-container'>
        <div className="input-wrapper">
            <input type="text" name='github-profile-finder' placeholder='Search username' value={userName} onChange={(event) => setUserName(event.target.value)} />
            <button onClick={handleSubmit}>Search</button>
        </div>
        <div>
            {
            profile !== null ? <User user={profile}/> : null
        }
        </div> 
    </div>
  )
}

export default ProfileFinder