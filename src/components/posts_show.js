import React, { Component } from 'react';
import {fetchPost} from '../actions';

class PostsShow extends Component {


	componentDidMount(){
		const id = this.props.match.params.id;
		this.props.fetchPost();
	}


	render() {
	    return (
	      <div>
	      SHOW
	      </div>
	    );
	}
}

function mapStateToProps({ posts }, ownProps){

	return { post: posts[ownProps.match.params.id;] };

}
export default connect(null, {fetchPost})(PostsShow)
