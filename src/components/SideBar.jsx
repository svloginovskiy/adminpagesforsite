import React from 'react';

const SideBar = ({setCurrentMode}) => {
    return (
        <div>
            <button onClick={() => setCurrentMode('posts')} className="btn btn-outline-secondary btn-lg w-100">Posts</button>
            <button onClick={() => setCurrentMode('users')} className="btn btn-outline-secondary btn-lg w-100">Users</button>
        </div>
    );
};

export default SideBar;