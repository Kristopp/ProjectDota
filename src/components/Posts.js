import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions/PostAction";



const Posts = props => {
  
  
  useEffect(() => {
    props.fetchPosts();
  }, []);
  console.log(props.posts)
  return (
    <React.Fragment>
      {props.posts.map(post => (
        <div key={post.match_id} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items
  

});

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
