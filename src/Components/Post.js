import React from 'react'
import './post.css'

function Post(props) {
    return (
        <div className='card'>
            <h2>{props.data.title}</h2>
            <p>{props.data.body}</p>
        </div>
    )
}

export default Post