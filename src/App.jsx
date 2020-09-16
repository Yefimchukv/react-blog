import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Dimmer, Icon, Image, Loader } from 'semantic-ui-react';
import api from './api/api';
import retakeData from './components/FullPagePost';
import { getPosts, changePostData, uploadFullPost } from './redux/reducers/postsReducer';

function App({ getPosts, posts, changePostData, uploadFullPost }) {
  useEffect(() => {
    api
      .getAllPosts()
      .then((res) => getPosts(res))
      .catch(console.error);
  }, [getPosts]);

  const handleLike = (post) => {
    api
      .changeLikeStatus(post)
      .then((res) => changePostData(res))
      .catch(console.error);
  };

  const handleFullPage = (post) => {
    api
      .uploadFullPagePost(post)
      .then((res) => uploadFullPost(res))
      .catch(console.error);
  };

  if (!posts.length) {
    return (
      <Dimmer active inverted>
        <Loader size="massive" inverted>
          ZZZ...
        </Loader>
      </Dimmer>
    );
  }

  return (
    <div className="App">
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Card>
              <Image src={post.img} wrapped ui={false} />
              <Card.Content onClick={() => handleFullPage(post)} className="posts-page">
                <Card.Header>{post.title}</Card.Header>
                <Card.Meta>
                  <span className="date">{post.createdAt}</span>
                </Card.Meta>
                <Card.Description>{post.body.slice(0, 100)}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <button onClick={() => handleLike(post)}>
                  <Icon name="like" color={post.isLiked ? 'red' : null} />
                  {post.likes}
                </button>
              </Card.Content>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = { getPosts, changePostData, uploadFullPost };

export default connect(mapStateToProps, mapDispatchToProps)(App);
