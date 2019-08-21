import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import ShowAllPosts from './components/ShowAllPosts';
import ShowSinglePost from './components/ShowSinglePost';


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
        <Route path='/showAllPosts' component={ShowAllPosts} />
        <Route path='/:path_id' component={ShowSinglePost} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
