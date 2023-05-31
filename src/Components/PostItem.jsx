import React from 'react';
import MainButton from "./UI/button/mainButton";

const PostItem = ({post}) => {
    return (
        <div
            key={post.id}
            style={{margin: 5, padding: 5,
                border: '1px solid teal',
                display: 'flex',
                justifyContent: 'space-between',}}
        >
            <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <MainButton>Удалить</MainButton>
            </div>
        </div>
    );
};

export default PostItem;