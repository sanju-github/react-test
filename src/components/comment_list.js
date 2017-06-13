import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
    Its a full redux application:
    1. Going to build an action creator to save submitted commeents and we are also going to build a reducer thats going to keep application level state that consists of an array of all the comments that gets submitted.So as we are building this comment list right here we are going to assume that we are going to use re-act redux as helper connect to hook into our application level state to get our list of comments.
    2. full react-redux application so we are going to assume that our comment list is going to get its list of comments from application level state. That means we are going to have to turn this comment list component into a container.
    3. A containter is a react component that has access to application level state through redux
    4. To turn a component into a container we have to first import the connect helper from the react readux library.
    4. we have to do export default connect() (CommentList);
    5. redux to save any of our comment or communicate those comments that are saved over to the comment list component. So we need make an action creator to save each comment as its gets created.And we also need to make a reducer or to collect all of those comments as they are created.
    6. the comments reducer will be responsible for creating the comments piece of application state as well
    
    */

const CommentList = (props) => {
    const list =  props.comments.map(comment => <li key={comment}>{comment}</li>);
    return(
    <ul className="comment-list">{list}</ul>
    );
};

function mapStateToProps(state){
    return { comments: state.comments};
}

//Map state to props = connect(mapStateToProps) and (CommentList) is the component we want to wrap.
export default connect(mapStateToProps) (CommentList);
    

