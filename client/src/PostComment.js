import styled from 'styled-components'

function PostComment({comment}) {

    const parseTime = (created_at) => {
        const date = new Date(created_at)
        return date.getTime()
    }
  
    function timeSince(date) {

      const seconds = Math.floor((new Date().getTime() - date) / 1000);

      let interval = seconds / 31536000;
    
      if (interval > 1) {
        return Math.floor(interval) + " years ago";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months ago";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days ago";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours ago";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
      }
      return Math.floor(seconds) + " seconds ago";
    }

    return (
        <CommentStyle>
            <div>
                <div className="comment">
                    <strong>{comment.username}</strong>
                    <p className="time">{timeSince(parseTime(comment.created_at))}</p>
                    <br/>
                    {comment.text}
                </div>
            </div>
        </CommentStyle>
    )
}

export default PostComment

const CommentStyle = styled.div`
    background: white;
    border-bottom: 2px solid #afdfd4;
    border-radius: 10px;

    p, .comment {
        margin: 10px;
        margin-left: 15px;
        text-align: left;
        padding-top: 10px;
    }

    .time {
        display: inline;
        margin-left: 5px;
        position: relative;
        top: -2px;
        font-size: 12px;
        color: grey;
        font-family: Arial, sans-serif;
    }

`
