import React, { Component } from 'react'
import './Article.css';


export class Article extends Component {
    render() {
        return (
            <div className='imgFull'>
                <div id="imgTartine">
                    <img src={this.props.img} alt=""/>
                </div>
                <div className="text">
                    <h1>{this.props.titre}</h1>
                    <p>{this.props.para}</p>

                </div>
                
            </div>
        )
    }
}

export default Article
