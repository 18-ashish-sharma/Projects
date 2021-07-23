import { useEffect } from 'react';
// import {useState} from 'react'
import { connect } from 'react-redux';
import { getPost } from '../../actions';

import './index.css';
const mapStateToProps = (state) => {
  return {
    selectedPost: state.posts
  }
}

const PostDetail = (props) => {
  const dispatch = props.dispatch

  // const [ selectedPost, setSelectedPost ] = useState({});

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
  //   .then(res=>res.json())
  //   .then(res=>{
  //     setSelectedPost(res);
  //   });
  // }, [props.match.params.id]);

  useEffect(() => {
    dispatch(getPost(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    // <main className="posts">
    //   <div className="post-details">
    //     <div className="post-list-item">
    //       <h4>{selectedPost.title}</h4>
    //       <p>{selectedPost.body}</p>
    //     </div>
    //   </div>
    // </main>

    <main className="posts">
    <div className="post-details">
      <div className="post-list-item">
        <h4>{props.selectedPost.title}</h4>
        <p>{props.selectedPost.body}</p>
      </div>
    </div>
  </main>
  )
};

// export default PostDetail;
export default connect(mapStateToProps)(PostDetail);