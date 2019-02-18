import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.points}</p>
        <button onClick={props.onUpvoteClick}>Upvote</button>
        <hr/>
    </div>
  );
}

Post.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    points: PropTypes.number,
    onUpvoteClick: PropTypes.func
}

export default Post;
