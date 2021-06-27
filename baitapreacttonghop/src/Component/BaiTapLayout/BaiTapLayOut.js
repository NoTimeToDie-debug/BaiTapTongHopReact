import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class BaiTapLayOut extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}
