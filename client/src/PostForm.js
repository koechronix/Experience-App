import {useState} from 'react';
import styled from 'styled-components';
import earth from './images/earth.jpg';

function PostForm({user}) {
    
    const [isSelected, setIsSelected] = useState(false)
    
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        photos: earth,
        user_id: user.id
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }; 

        fetch("/posts", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then(() => {
                    setFormData({
                        title: "",
                        body: "",
                        photos: earth,
                        user_id: user.id
                    });
                    setIsSelected(false);
                });
            } else {
                resp.json().then(() => {
                    alert('Title and post content must be completed')
                });
            }
        });
    }

    return (
        <div>
        {isSelected ? 
        <FormStyle> 
            <form onSubmit={handleSubmit}>
                <h2>Share Your Travels...</h2>
                <label htmlFor="title">Title </label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="body">Post Content </label>
                <textarea
                    name="body"
                    value={formData.body}
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="photos">Photos </label>
                <input
                    type="text"
                    name="photos"
                    value={formData.photo}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Post!</button>
            </form>
        </FormStyle> 
        :
        <ButtonStyle>
            <button type="button" onClick={() => setIsSelected(true)}>Share Your Travels!</button>
        </ButtonStyle>
        }
        </div>
    )
}

export default PostForm

const FormStyle = styled.div`

    background: #f3eedb;
    padding: 10px;
    width: 50%;
    margin: auto;
    margin-top: 20px;
    border-radius: 5px;
    border: 5px solid #afdfd4;
    box-shadow: 0 0 0 10px #f3eedb;
    
    textarea {
        resize: vertical;
        display: block;
        margin: auto;
        width: 80%;
        height: 150px;
        border: 3px solid #afdfd4;
        border-radius: 4px;
        font-family: Arial, serif;
    }

    input {
        display: block;
        justify-content: center;
        margin: auto;
        width: 80%;
        border: 3px solid #afdfd4;
        border-radius: 4px;
    }

    label {
        display: inline-block;
        margin-bottom: 5px;
        margin-top: 5px;
        font-size: 18px;
        border-top: 2px solid #9fd0c1;
        border-bottom: 2px solid #9fd0c1;
    }

    button {
        display: inline-block;
        margin-bottom: 5px;
        margin-top: 10px;
        padding: 6px 20px 6px 20px;
        font-size: 18px;
        background: #afdfd4;
        border-radius: 20px;
        border: 2px solid #9fd0c1;
        font-family: Georgia, serif;
        cursor: pointer;

    }

    button:hover {
        background: #7fa69a;
    }

`
const ButtonStyle = styled.div`
    button {
            display: inline-block;
            margin-bottom: 5px;
            margin-top: 10px;
            padding: 6px 20px 6px 20px;
            font-size: 18px;
            background: #afdfd4;
            border-radius: 20px;
            border: 2px solid #9fd0c1;
            font-family: Georgia, serif;
            cursor: pointer;

        }

        button:hover {
            background: #7fa69a;
        }

`