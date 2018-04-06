import React, { Component } from 'react';
import {fetchPost} from '../actions';
import {connect} from 'react-redux'; 

class PostsShow extends Component {


	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.fetchPost(id);
	}

	render() {
		const {post} = this.props;

		if(!post){

			return <div>Loading...</div>;

		}

	    return (
	      <div>
	      {post.title}
	      </div>
	    );
	}
}

function mapStateToProps({ posts }, ownProps){

	return { post: posts[ownProps.match.params.id] };

}
export default connect(mapStateToProps, {fetchPost})(PostsShow)
