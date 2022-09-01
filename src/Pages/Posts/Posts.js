import React, { useEffect, useState } from 'react'


function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        try {

            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => console.log(json))
        } catch (error) {
            console.log(error);
        }

    }, [])

    return (
        <div>Posts</div>
    )
}

export default Posts