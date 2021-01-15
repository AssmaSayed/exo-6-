import React, { Component } from 'react'
import './Body.css';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';






export class Body extends Component {
    render() {
        return (
            <div>
                <body>
                    <Header/>
                    <Article img="./img/chat.png" titre="Mon premier article" para="texttextextext"/>
                    <Article img="./img/chat.png" titre="Mon premier article" para="hhahaahahahaha"/>

                    <Footer/> 
                    
                </body>               


            </div>
        )
    }
}

export default Body
