import React from "react";
import { v4 } from 'uuid';
import Post from './Post';

class PostList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postArray:   [
        {
          title: "title1",
          description: "description1",
          points: 0,
          key: v4()
        },
        {
          title: "title2",
          description: "description2",
          points: 0,
          key: v4()
        },
        {
          title: "title3",
          description: "description3",
          points: 0,
          key: v4()
        },
        {
          title: "title4",
          description: "description4",
          points: 0,
          key: v4()
        },
        {
          title: "title5",
          description: "description5",
          points: 0,
          key: v4()
        }
      ],

    }
  }

  handleUpvoteClick(id) {
    for(let post of this.state.postArray) {
      if(post.key === id) {
        post.points++;
        let newState = Object.assign({}, this.state.postArray, post);
        this.setState({newState});
        console.log(this.state.postArray);
      }
    }
  }



  render() {
    return (
      <div>
      {this.state.postArray.map((post) =>
        <Post title={post.title}
        description={post.description}
        points={post.points}
        key={post.key}
        onUpvoteClick={() => this.handleUpvoteClick(post.key)}/>
      )}
      </div>
    );
  }
}

export default PostList;
