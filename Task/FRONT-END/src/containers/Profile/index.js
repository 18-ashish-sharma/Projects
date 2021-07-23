// import { getAuth } from '../../utils/auth'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import data from '../../data (8).json'

import './index.scss';

const Profile = () => {

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
            </div>
            <div>
                    {
                        data.map((item) => {
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


