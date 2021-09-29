import React from 'react';
import ActionButton from "./UI/button/ActionButton";

const PostTable = ({posts, remove, edit}) => {

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Link</th>
                <th scope="col">Created by</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {posts.map((post) =>
                <tr key={post.id}>
                    <th scope="col">{post.title}</th>
                    <th scope="col"><a href={`/posts/${post.id}`}>link</a></th>
                    <th scope="col">{post.user}</th>
                    <th scope="col">{post.category}</th>
                    <th scope="col"><ActionButton onClick={() => remove(post)}>Delete</ActionButton> <ActionButton onClick={() => edit(post)}>Edit</ActionButton></th>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default PostTable;