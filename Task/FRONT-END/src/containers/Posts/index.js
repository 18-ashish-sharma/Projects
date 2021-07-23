import {  useState } from 'react';
import {useEffect} from 'react'
import { connect } from 'react-redux';
import { PATHS } from '../../config';
// import { listPost } from '../../actions';
import { getPost } from '../../actions';
import './index.css';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    postlist: state.posts
  }
}

const Posts = (props) => {


  // const [ postlist, setPostlist ] = useState([]);
  const [ selectedPost, setSelectedPost ] = useState({});
  const dispatch = props.dispatch

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res=>res.json())
  //   .then(res=>{
  //     setPostlist(res);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res=>res.json())
  //   .then(res=>{
  //     // setPostlist(res);
  //     dispatch(listPost(res))
  //   });
  // }, [dispatch]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res=>res.json())
    // .then(res=>{
    //   // setPostlist(res);
    //   dispatch(listPost(res))
    // });
    dispatch(getPost())
  }, [dispatch]);

  const getDetails = (post) => {
    setSelectedPost(post);
    props.history.push(`${PATHS.POSTS}/${post.id}`);
  }

  return (
    <main className="posts">
      <div className="post-container" >
        <h1>Posts</h1>
        <div className="post-list">
          {
            props.postlist.map(item => {
              return (
                <div key={item.id} className="post-list-item" onClick={()=>getDetails(item)}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="post-details">
        <div className="post-list-item">
          <label>Clicked {props.counter} times!!</label>
          <h4>{selectedPost.title}</h4>
          <p>{selectedPost.body}</p>
        </div>
      </div>
    </main>
  )
};

export default connect(mapStateToProps)(Posts);
