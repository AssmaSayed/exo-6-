import React, { Component } from 'react'
import Navigation from './Navigation';
import Search from './Search';

export class Header extends Component {
    render() {
        return (
            <div className="headerFull">
               <Navigation/>
               <Search/>
                
            </div>
        )
    }
}

export default Header
