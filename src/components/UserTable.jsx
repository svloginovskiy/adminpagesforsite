import React from 'react';
import ActionButton from "./UI/button/ActionButton";

const UserTable = ({users, remove, edit}) => {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) =>
                <tr key={user.id}>
                    <th scope="col">{user.id}</th>
                    <th scope="col">{user.name}</th>
                    <th scope="col">{user.email}</th>
                    <th scope="col">{user.role}</th>
                    <th scope="col"><ActionButton onClick={() => remove(user)}>Delete</ActionButton> <ActionButton
                        onClick={() => edit(user)}>Edit</ActionButton></th>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default UserTable;