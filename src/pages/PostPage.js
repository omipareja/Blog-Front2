import React, { Fragment } from 'react'
import Welcome from '../componentes/Welcome'
import PostList from '../componentes/PostList'

const PostPage = ({data}) => (
    
    <Fragment>
        <Welcome/>
        <PostList 
            posts={data}
        />
    </Fragment>
)

export default PostPage