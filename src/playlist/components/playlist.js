import React, { Component } from 'react';
import Media from './media';
import './playlist.css'
class Playlist extends Component{

   
    render() {
        //console.log(this.props.datos);
        const playlist = this.props.datos.categories[0].playlist
        //console.log(playlist);
        return (
             <div className="playlist">
                {
                    playlist.map((item) =>{
                       return <Media {...item} key ={item.id}/>
                    })
                }
                
             </div>
        );
    }




}

export default Playlist;