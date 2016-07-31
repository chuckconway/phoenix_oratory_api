import React, {Component} from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Post from './post.jsx';

class Home extends Component {

  componentWillMount(){
    this.props.retrieveAllPosts();
  }

  renderPosts(posts){
    return posts.map((post) => {
      return (<Post post={post} key={post.id} />);
   });
  }

  render(){
    if(this.props.posts){
       return(
         <div className="blog-posts readable-content">
          {this.renderPosts(this.props.posts)}
         </div>
       );
    } else {
      return (<div>Loading...</div>);
    }
  }
}

export default Home;

function mapStateToProps(state){
  return {
    posts:state.post.posts
  };
}

export default connect(mapStateToProps, actions)(Home);
