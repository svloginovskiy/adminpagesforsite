import React, {useEffect, useState} from 'react';

const EditUserForm = ({user, save, setVisible}) => {

    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        setSelectedRole(user.role);
    }, [user])

    const onClickFunction = (event) => {
        event.preventDefault();
        save({...user, role: selectedRole});
        setVisible(false);
    }

    return (
        <form>
            <h2>Choose role</h2>
            <select className="form-select mb-2" form="roleFrom"
                    onChange={(event) => setSelectedRole(event.target.value)} required>
                <option value="admin">Admin</option>
                <option value="writer">Writer</option>
            </select>
            <button type="submit" className="btn btn-primary mb-0" onClick={onClickFunction}>Save</button>
        </form>
    );
};

export default EditUserForm;