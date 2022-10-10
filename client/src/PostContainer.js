import {useState, useEffect} from 'react'
import Post from './Post'

function PostContainer({search, user, name, setEdited, edited}) {

    const [feedPosts, setFeedPosts] = useState([])

    // fetch to database for rendering of posts
    useEffect(() => {
        fetch("/posts")
        .then(resp => resp.json())
        .then(posts => {
            setFeedPosts(posts)
        })
    }, [])

    const filteredPosts = () => {
        if (!!search) {
            // given a search term exists, filter by search
            return feedPosts.filter(post => {
                return post.title.toLowerCase().includes(search.toLowerCase()) || post.user.username.toLowerCase().includes(search.toLowerCase())
            })
        } else if (name === "account") {
            // on account page, filter by user's own posts
            return feedPosts.filter(post => post.user.id === user.id)
        } else {
            // on home page, show all posts
            return feedPosts
        }
    }

    const renderPosts = filteredPosts().map(post => <Post key={post.id} user={user} post={post} feedPosts={feedPosts} setPosts={setFeedPosts} />)

    if (!feedPosts[0]) return <div>Loading...</div>
    return (
        <div>
            {renderPosts}
        </div>
    )
}

export default PostContainer

