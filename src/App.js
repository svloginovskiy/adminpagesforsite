import React, {useEffect, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import ActionButton from "./components/UI/button/ActionButton";
import PostTable from "./components/PostTable";
import PostService from "./API/PostService";
import {getPageCount, getPagesArray} from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";
import SideBar from "./components/SideBar";
import UserTable from "./components/UserTable";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, link: '#', title: 'Javascript', user: 'user', category: 'news'},
        {id: 2, link: '#', title: 'Javascript', user: 'user', category: 'news'},
        {id: 3, link: '#', title: 'Javascript', user: 'user', category: 'news'},
    ]);
    const [users, setUsers] = useState([
        {id: 1, name: 'Admin', email: 'email@email.org', role: 'admin'},
        {id: 2, name: 'Alan', email: 'email@email.org', role: 'writer'},
        {id: 3, name: 'Turing', email: 'email@email.org', role: 'reader'},
    ])
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(14);
    const [totalPages, setTotalPages] = useState(10);
    const [currentMode, setCurrentMode] = useState('posts');

    useEffect(() => {
        fetchPosts();
    }, [page])
    useEffect(()=> {
        setPage(1);
    }, [currentMode])
    const changePage = (page) => {
        setPage(page)
    }

    async function fetchPosts() {
        const response = await PostService.getPage(limit, page);
        if (response != null) {
            const newposts = response.json();
            console.log(newposts);
            if (newposts.length !== 0) {
                setPosts([...posts, newposts]);
            }
            const totalCount = response.headers.get('x-total-count');
            setTotalPages(getPageCount(totalCount, limit));
        }
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const editPost = (post) => {

    }
    const removeUser = (user) => {
        setUsers(users.filter(u => u.id !== user.id))
    }
    const editUser = (user) => {

    }

    return (
        <div className="App container-fluid h-100">
            <div className="row h-100">
                <div className="col-1 border-end border-2 px-0 h-100">
                    <SideBar setCurrentMode={setCurrentMode}/>
                </div>
                <div className="col-11 px-0"> {
                    currentMode === 'posts'
                        ? <PostTable posts={posts} remove={removePost} edit={editPost}/>
                        : <UserTable users={users} remove={removeUser} edit={editUser}/>
                }
                    <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
                </div>
            </div>

        </div>
    );
}

export default App;
