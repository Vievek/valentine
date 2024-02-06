import React from 'react'
import './Two.css'
import TwoImg from './TwoImg'
import Anchor from './Anchor'

function Two() {
    return (
        <>
            <div className='pageTwo' id='two'>
                <h1>click the images</h1>
                <TwoImg />
                <Anchor text='next page' pageId='#three' />
            </div>
        </>
    )
}

export default Two