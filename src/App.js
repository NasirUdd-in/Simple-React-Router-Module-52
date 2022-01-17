import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';
import PostDetail from './components/PostDetail/PostDetail';
import Photos from './components/Photos.js/Photos';
import PhotoDetails from './components/PhotoDetails/PhotoDetails';
import Posts from './components/Posts/Posts';
import AllUser from './components/AllUser/AllUser';
import HelloDetails from './components/HelloDetails/HelloDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route path="/posts">
            <Posts></Posts>
          </Route>
          <Route path= "/photos">
            <Photos></Photos>
          </Route>
          <Route path= "/photoDetails/:photoId">
            <PhotoDetails></PhotoDetails>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route path="/allUser">
            <AllUser></AllUser>
          </Route>  
          <Route path="/userDetails/:userId">
            <HelloDetails></HelloDetails>
          </Route>    
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
