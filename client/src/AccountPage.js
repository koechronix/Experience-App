import {useState} from 'react';
import PostForm from './PostForm';
import PostContainer from './PostContainer';
import styled from 'styled-components';

function AccountPage({user, name}) {

    const [edited, setEdited] = useState(false)

    return (
        <AccountStyle>
            <div className="account-head">
                <h1>{user.name.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</h1>
                <h2>@{user.username}</h2>
            </div>
            <PostForm user={user} /> 
            <PostContainer user={user} name={name} setEdited={setEdited} edited={edited}/>
        </AccountStyle>
    )
}

export default AccountPage

const AccountStyle = styled.div`
    .account-head {
    display: inline-block;
    width: 30%;
    margin-bottom: 5px;
    margin-top: 10px;
    padding: 6px 20px 6px 20px;
    /* font-size: 18px; */
    background: #f3eedb;
    border-radius: 20px;
    border: 2px solid #9fd0c1;
    font-family: Georgia, serif;
    }
`