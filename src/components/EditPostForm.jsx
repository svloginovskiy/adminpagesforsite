import React, {useEffect, useState} from 'react';

const EditPostForm = ({post, save, setVisible}) => {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [titleInputValue, setTitleInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    useEffect(()=>{
        setTextAreaValue(post.text);
        setTitleInputValue(post.title);
        setSelectValue(post.category);
    }, [post]);
    const onClickFunction = (event) => {
        event.preventDefault();
        save({...post, title: titleInputValue, text: textAreaValue, category: selectValue});
        setVisible(false);
    }
    return (
        <form className="form-floating pt-3" action="/submit" method="POST" encType="multipart/form-data">
            <select className="form-select mb-1" onChange={event => setSelectValue(event.target.value)} form="" required>
                <option disabled selected value="-1">Category</option>
                <option value="news">News</option>
                <option value="memes">Memes</option>
            </select>
            <div className="form-floating mb-1">
                <input type="text"
                       className="form-control border fw-bold"
                       placeholder="Title" name="title" value={titleInputValue}
                       onChange={(e) => setTitleInputValue(e.target.value)}
                       required/>
                <label className="text-muted fw-bold" htmlFor="postTitle">Edit title</label>
            </div>
            <div className="mb-3">
                    <textarea
                        className="form-control border"
                        placeholder="Enter text"
                        id="postText"
                        style={{height: '10rem', resize: 'none'}} name="text" value={textAreaValue}
                        onChange={(e) => setTextAreaValue(e.target.value)}
                    />
            </div>
            <div className="d-flex">
                <button type="submit" className="btn btn-primary mb-3" onClick={onClickFunction}>Save</button>
            </div>
        </form>
    );
};

export default EditPostForm;