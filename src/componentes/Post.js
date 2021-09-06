import React from 'react'
import './styles/Post.css'
import emptyImg from '../images/empty.png'

const Post = ({id,title,summary,image,user_key,categorie_key}) => (
    
    <div className="col-md-4 mx-auto">
        <div class="card">
            <span class="border border-info border-2 rounded-2">
                <div className="card-body">
                    <img
                        src={`http://res.cloudinary.com/daplasrzs/${image}`|| emptyImg}
                        class="img-fluid rounded"
                    />
                    <div class="card-body">
                        <h4 class="card-title"><a href="#">{title}</a></h4>
                        <p class="card-text"><font color="#006699">{categorie_key.name}</font></p>
                        <h6 class="card-text">{summary}</h6>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            <span class="card-text"><font color="#006699"> {user_key.username}</font></span>
                        </span>
                    </div>
                </div>
            </span>
        </div> 
    </div>   
)

export default Post
