import React, {useState} from 'react';
import MainButton from "./UI/button/mainButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        if (newPost.title && newPost.body !== '') {
            create(newPost)
            setPost({title: '', body: ''})
        }
    }

    return (
        <div>
            <form
                style={{display: 'flex', flexDirection: 'column',
                    width: 400,
                    margin: ' 10px auto',}}
            >
                <input
                    type="text"
                    placeholder="Название"
                    onChange={e => setPost({...post, title: e.target.value})}
                    value={post.title}
                />
                <input
                    type="text"
                    placeholder="Описание"
                    onChange={e => setPost({...post, body: e.target.value})}
                    value={post.body}
                />
                <MainButton onClick={addNewPost}>Создать пост</MainButton>
            </form>
        </div>
    );
};

export default PostForm;