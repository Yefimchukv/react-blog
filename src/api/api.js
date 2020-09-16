import mockedData from '../mockedData';

const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockedData);
    }, 400);
  });
};

const changeLikeStatus = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post.isLiked) {
        resolve({
          ...post,
          likes: post.likes - 1,
          isLiked: false,
        });
      } else {
        resolve({
          ...post,
          likes: post.likes + 1,
          isLiked: true,
        });
      }
    });
  });
};

const uploadFullPagePost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ ...post });
    }, 600);
  });
};

export default { getAllPosts, changeLikeStatus, uploadFullPagePost };
