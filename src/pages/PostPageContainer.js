import React from 'react'
import PostPage from './PostPage'
import useFetch from '../hooks/useFetch'

const PostPageContainer = () => {

    const {data} = useFetch(`http://127.0.0.1:8000/post/post/`)

/*
class PostPageContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "title": "Technique Guides",
                "description": "Learn amazing street workout and calisthenics",
                "summary": "hola"
            },{
                "id": 2,
                "title": "Skills Training",
                "description": "Learn the secrets of bodyweight techniques",
                "summary": "hola"
            },{
                "id": 3,
                "title": "Strength Training",
                "description": "Train anytime, everywere and become a superhero!",
                "summary": "hola"
            }]
        }
    }
*/
    return(
        <div>
            <PostPage
                data={data}            
            />
        </div>
        )
    }

export default PostPageContainer