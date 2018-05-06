import React, { Component } from 'react';

import './App.css';

let defaultStyle={
  width:"15%",
  display:'inline-block'
}
let fakeServerData={
  user:{
    name:'Shweta',
    playlists:[
      {
        name:'My favourites',
        songs:[{name:'A',duration:1234},{name:'B',duration:1234},{name:'C',duration:1234}]
      },
      {
        name:'Discover Weekley',
      songs:[{name:'D',duration:1234},{name:'E',duration:1234},{name:'F',duration:1234}]
      },
      {
        name:'Another',
        songs:[{name:'G',duration:1234},{name:'H',duration:1234},{name:'I',duration:1234}]
      },
      {
        name:'BAck',
        songs:[{name:'J',duration:1234},{name:'K',duration:1234},{name:'L',duration:1234}]
      }
    ]
  }
}
class PlaylistCounter extends Component{
  render(){
    return(
      <div style= {{...defaultStyle}}>
      <h2>{this.props.playlists.length}playlists</h2>
      </div>
    );
  }
}
class HourCounter extends Component{
  render(){
    let allsongs=this.props.playlists.reduce((songs,eachplaylist) =>{
      return songs.concat(eachplaylist.songs)
    },[])
   let totalduration=allsongs.reduce((sum,eachsong)=>{
     return sum+eachsong.duration
   },0)
    return(
      <div style= {{...defaultStyle}}>
      <h2>{Math.round(totalduration/60)}Hours</h2>
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
  constructor(){
  super();
    this.state={serverData: {}}
  }
  componentDidMount(){
    setTimeout(()=>{
    this.setState({serverData:fakeServerData});
  },1000);
}
  render() {
    return (
      <div className="App">
  {this.state.serverData.user ?
    <div>
    <h1 style={{'font-size':'54px'}}>
  { this.state.serverData.user.name} Playlist
    </h1>
         <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
        <HourCounter playlists={this.state.serverData.user.playlists} />
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        </div>: 'Loding...'
      }
      </div>
    );
  }
}

export default App;
