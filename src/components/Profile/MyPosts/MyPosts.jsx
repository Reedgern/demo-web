import React from "react";
import {connect} from "react-redux";
import Post from "./Post/Post";
import {addPost} from "../../../redux/profileReducer";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLength(50);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Enter new post'} name={'newPostText'} validate={[required, maxLength50]} />
            </div>
            <button>Add post</button>
        </form>
    );
};

const AddPostFormRedux = reduxForm({
    form: 'addPost'
})(AddPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likes={p.likes}/>);

    let onSubmit = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div>
            <h1>My posts</h1>
            {postsElements}
            <AddPostFormRedux onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
});

const mapDispatchToProps = {
    addPost
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;