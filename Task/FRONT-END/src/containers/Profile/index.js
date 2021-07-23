// import { getAuth } from '../../utils/auth'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import data from '../../data (8).json'

import { useEffect, useState } from 'react';

import './index.scss';

const Profile = () => {

    const [ postlist, setPostlist ] = useState([]);

    useEffect(() => {
        const datFound = async() => {
            const resp = await fetch('http://localhost:5000/allData')
            const jsonData = await resp.json()
            setPostlist(jsonData)
        }
        datFound()
    },[])

    const isLoggedIn = useSelector(state => state.auth)
    
    // const isLoggedIn = useSelector(state => state.auth);
    const profile = useSelector(state => state.profile);

    if (!isLoggedIn) {
        return <Redirect to="/login"></Redirect>
    }
      

    return (
        <>

            <div className="profile-container">
                <h1>{profile.firstname}</h1>
                <span>{profile.email}</span>
                <br/><br/>
            </div>
            <div>
                    {
                        postlist.map((item) => {
                            return (
                                <div className="card" id='main' style={{width: '18rem'}}>
                                    <div className="card-body" key={item.id}>
                                        <h2>{item.id}</h2>
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.body}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            
        </>
    )
}

export default Profile




// fetch("http://localhost:5000/allData")
// .then(response => {
//   console.log(response)
// })
// .then(posts => {
//   setPostlist(posts);
//   console.log(posts)
// })
// .then(err => {
//   console.log(err);
// });
// })