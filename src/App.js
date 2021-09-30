import React, {useEffect, useState} from "react";
import "./styles/App.css";
import ActionButton from "./components/UI/button/ActionButton";
import PostTable from "./components/PostTable";
import PostService from "./API/PostService";
import {getPageCount, getPagesArray} from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";
import SideBar from "./components/SideBar";
import UserTable from "./components/UserTable";
import UserService from "./API/UserService";
import AdminModal from "./components/UI/AdminModal/AdminModal";
import EditPostForm from "./components/EditPostForm";
import EditUserForm from "./components/EditUserForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, link: '#', title: 'Javascript1', user: 'user2', category: 'news', text: 'it\'s'},
        {id: 2, link: '#', title: 'Javascript2', user: 'user3', category: 'news', text: 'ticking'},
        {id: 3, link: '#', title: 'Javascript3', user: 'user1', category: 'news', text: 'away'},
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
    const [modal, setModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        if (currentMode === 'posts') {
            fetchPosts();
        } else {
            fetchUsers();
        }
    }, [page, currentMode])

    useEffect(() => {
        setPage(1);
    }, [currentMode])

    const changePage = (page) => {
        setPage(page)
    }

    async function fetchPosts() {
        const response = await PostService.getPage(limit, page);
        const newposts = await response.json();
        console.log(newposts);
        setPosts(newposts);
        console.log(posts);
        const totalCount = response.headers.get('x-total-count');
        setTotalPages(getPageCount(totalCount, limit));
    }

    async function fetchUsers() {
        const response = await UserService.getPage(limit, page);
        const newusers = await response.json();
        setUsers(newusers);
        const totalCount = response.headers.get('x-total-count');
        setTotalPages(getPageCount(totalCount, limit));
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        PostService.deletePost(post.id)
    }
    const editPost = (post) => {
        setModal(true);
        setSelectedPost(post);
    }
    const savePost = (post) => {
        setPosts(posts.map(p => p.id === post.id ? post : p));
        PostService.savePost(post);
    }
    const removeUser = (user) => {
        setUsers(users.filter(u => u.id !== user.id))
        UserService.deleteUser(user.id)
    }
    const editUser = (user) => {
        setModal(true);
        setSelectedUser(user);
    }
    const saveUser = (user) => {
        setUsers(users.map(u => u.id === user.id ? user : u));
        UserService.saveUser(user);
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
            <AdminModal visible={modal} setVisible={setModal}>
                {currentMode === 'posts'
                    ? <EditPostForm post={selectedPost} save={savePost} setVisible={setModal}/>
                    : <EditUserForm user={selectedUser} save={saveUser} setVisible={setModal}/>
                }

            </AdminModal>
        </div>

    );
}

export default App;
