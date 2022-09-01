import React, { useEffect, useState } from 'react'
import Post from '../../Components/Post'
import './posts.css'

function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))

    }, [])

    return (

        <div className='container'>
            <h1>Posts</h1>
            <div className="wrapper">
                {
                    posts.length ?
                        posts.map(item => <Post key={item.id} data={item} />)
                        : <p>Loading...</p>
                }

            </div>
        </div>
    )
}

export default Posts