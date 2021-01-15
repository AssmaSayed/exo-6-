import React, { Component } from 'react'
import './Search.css';


export class Search extends Component {
    render() {
        return (
            <div className="button">
                <label htmlFor="">Search : </label>
                <input type="text"/>
                <button>Go</button>
                
            </div>
        )
    }
}

export default Search
