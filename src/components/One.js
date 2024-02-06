import React from 'react'
import Anchor from './Anchor'
import Onetext from './Onetext'
import './One.css'

function One() {
    return (
        <>
            <div className='pages'>
                <Onetext />
                <Anchor text='Click Me' pageId='#two' />
            </div>
        </>
    )
}

export default One