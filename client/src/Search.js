import {useState} from 'react'
import PostContainer from './PostContainer'
import styled from 'styled-components'

function Search({user}) {

    const [search, setSearch] = useState('')

    return (
        <div>
            <SearchStyle>
                <form>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search for posts by a title or username..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                </form>
            </SearchStyle>
            <PostContainer search={search} user={user}/>
        </div>
    )
}

export default Search

const SearchStyle = styled.div`

    input {
        margin: auto;
        margin-top: 1em;
        width: 50%;
        border: 2px solid white;
        border-bottom: 2px solid #afdfd4;
        border-radius: 10px;
        height: 40px;
        padding-left: 10px;
        font-family: Georgia;
    }

    button {
        display: inline-block;
        margin-bottom: 0px;
        margin-top: 5px;
        padding: 3px 10px 3px 10px;
        font-size: 16px;
        background: #afdfd4;
        border-radius: 20px;
        border: 2px solid #9fd0c1;
        font-family: Georgia, serif;
        cursor: pointer;

    }
`
