import React, {useState} from 'react';
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";

const Home = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Title 1', body: 'body 1'},
        {id: 2, title: 'Title 2', body: 'body 2'},
        {id: 3, title: 'Title 3', body: 'body 3'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    return (
        <div className="Home">
            <PostForm create={createPost}/>
            <PostList posts={posts}/>
        </div>
    );
};

export default Home;