import React from 'react'
import { Component } from 'react'
import pokedex from './images/pokedex.png'
import './header.css'

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <img src={ pokedex } alt=""/>
                <h1>Pokedex</h1>
            </header>
        )
    }
}

export default Header