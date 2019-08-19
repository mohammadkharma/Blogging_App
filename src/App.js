import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import ShowCurrentPosts from './components/ShowCurrentPosts';


function App() {
  return (
    /* surrounding the App with a <BrowserRouter> tag, in order to create routes inside it */
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/createPost' component={CreatePost} />
      <Route path='/showCurrentPosts' component={ShowCurrentPosts} />
    </div>
    </BrowserRouter>
  );
}

export default App;
