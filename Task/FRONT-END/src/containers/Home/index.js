// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Tasks from '../../components/Tasks';
// import { addData, decrementCounter, incrementCounter,getPost } from '../../actions';
// import { useEffect } from 'react';
import { Button } from 'reactstrap';
// import AppNav from '../../components/AppNav';
// import Footer from '../../components/Footer';
// const mapStateToProps = (state) => {
//   return {
//     counts: state.counter
//   }
// }

const Home = (props) => {
  const isLoggedIn = useSelector(state => state.auth);
  // console.log(props);
  // const dispatch = props.dispatch

  // useEffect(() => {
  //   // fetch('https://jsonplaceholder.typicode.com/posts')
  //   // .then(res=>res.json())
  //   // .then(res=>{
  //   //   // setPostlist(res);
  //   //   dispatch(listPost(res))
  //   // });
  //   dispatch(getPost())
  // }, [dispatch]);
  return (
    // <div>
    //   <AppNav />
    //   <Footer />
    //   <h1>Home</h1>
    //   <button onClick={()=>props.dispatch(addData())}>Add Data</button>
    //   <button onClick={()=>props.dispatch(incrementCounter())}>Increment</button>
    //   <label>{props.counts}</label>
    //   <button onClick={()=>props.dispatch(decrementCounter())}>Decrement</button>
    //   <Button color="danger">Danger!</Button>
    // </div>
    <>
        {
      isLoggedIn ?
      <Tasks /> :
      <p>Login to continue...</p>
    }
    </>
  )
};  


// export default connect(mapStateToProps)(Home);
export default Home