import React from 'react'

const Anchor = ({ text, pageId }) => {
    return (
        <>
            <a href={pageId} className='anchor'>
                <div >
                    <h1>{text}</h1>
                </div>
            </a>
        </>
    )
}

export default Anchor