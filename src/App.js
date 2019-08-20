import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import ShowCurrentPosts from './components/ShowCurrentPosts';
import Post from './components/Post';


class App extends Component {
  
  state = {
    posts: []
  }

  

  render() {
    return (
      /* surrounding the App with a <BrowserRouter> tag, in order to create routes inside it */
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/createPost' component={CreatePost} />
        <Route path='/showCurrentPosts' component={ShowCurrentPosts} />
        <Route path='/:path_id' component={Post} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
