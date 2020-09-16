export const GET_POSTS = 'GET_POSTS';
export const CHANGE_POST_DATA = 'CHANGE_POST_DATA';
export const UPLOAD_FULL_POST = 'UPLOAD_FULL_POST';

export const getPosts = (data) => ({
  type: GET_POSTS,
  payload: data,
});

export const changePostData = (post) => ({
  type: CHANGE_POST_DATA,
  payload: post,
});

export const uploadFullPost = (post) => ({
  type: UPLOAD_FULL_POST,
  payload: post,
});

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case CHANGE_POST_DATA: {
      const updatedPosts = state.posts.map((oldPost) => {
        if (oldPost.id === action.payload.id) {
          return action.payload;
        }
        return oldPost;
      });

      return {
        ...state,
        posts: updatedPosts,
      };
    }

    case UPLOAD_FULL_POST: {
      const updatedFullPost = state.posts.map((singlePost) => {
        if (singlePost.id === action.payload.id) {
          return action.payload;
        }
        return singlePost;
      });
      console.log(updatedFullPost);
      return {
        ...state,
        posts: updatedFullPost,
      };
    }

    default:
      return state;
  }
};
