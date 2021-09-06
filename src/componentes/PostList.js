import React from 'react'
import Post from '../componentes/Post'

const PostList = ({posts}) => (
    <>
        {posts.map((post) =>{ //Crea un nuevo array con cada uno de los elementos que opera
                return( 
                    <Post
                    key={post.id}
                    {...post} //Le pasamos todos los atributos que tenga post (post.title, post.description, etc)
                    />
                )
            })}  
    </>
)

export default PostList