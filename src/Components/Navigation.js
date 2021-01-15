import React, { Component } from 'react';
import './Navigation.css';


export class Navigation extends Component {
    logeur = (a) => {
        console.log(a) 
    } 

    render() {
        return (
            <div className="lienA">
                <a href="/#"onClick = {() => this.logeur('Accueil')}>HOME</a>
                <a href="/#"onMouseOver = {() => this.logeur ('Galerie')}>LINK</a>
                <a href="/#" onDoubleClick = {() => this.logeur ('Contact')}>CHEPA</a>
                
            </div>
        )
    }
}

export default Navigation
