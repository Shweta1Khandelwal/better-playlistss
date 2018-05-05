import React, { Component } from 'react';

import './App.css';

let defaultStyle={
  width:"15%",
  display:'inline-block'
}
class Aggregate extends Component{
  render(){
    return(
      <div style= {{...defaultStyle}}>
      <h2>Number text</h2>
      </div>
    );
  }
}
class Filter extends Component{
  render(){
    return(
<div>
  <img/>
  <input type="text"/>
  Filter
  </div>
    );
  }
}
class Playlist extends Component{
  render(){
    return(
      <div style={defaultStyle}>
<img/>
<h3> Playlist Name </h3>
<ul><li>Song1</li><li>Song2</li><li>Song3</li><li>Song4</li></ul>
</div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{...defaultStyle,'font-size':'44px'}}>Title</h1>
        <Aggregate></Aggregate>
        <Aggregate></Aggregate>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
