import React, { useState } from 'react';
import Card from './card2';
import CustomImage from './custom-icon.png';
import './PostList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newPostData, setNewPostData] = useState({
    name: '',
    imageSrc: '',
    description: '',
  });

  const handleCreatePost = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostData({ ...newPostData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewPostData({ ...newPostData, imageSrc: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleCreateNewPost = () => {
    const { name, imageSrc, description } = newPostData;

    if (name && imageSrc && description) {
      const newPost = {
        name,
        imageSrc,
        content: description,
      };
      setPosts([...posts, newPost]);
      setShowPopup(false);
      setNewPostData({
        name: '',
        imageSrc: '',
        description: '',
      });
    }
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const handleEditPost = (index) => {
    console.log("Editing is happening");
  };

  return (
    <div>
      <div className='sndp'>
        <div>
          <h2>Your posts</h2>
        </div>
        <button className='create-post-btn' onClick={handleCreatePost}>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          Create a post
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className='mhead2'>
              <h2 className='head2'>Create a post</h2>
              <button className="close-button2" onClick={handlePopupClose}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="instr">Write something for your post</div>
            <div className="subject">Subject</div>
            <input
              className='input2'
              type="text"
              name="name"
              value={newPostData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="imageUpload" className="custom-file-upload">
              <input
                id="imageUpload"
                type="file"
                name="imageSrc"
                onChange={handleImageUpload}
              />
              <span className="file-icon">
                <img src={CustomImage}  alt="File Icon" />
                <div className="file-name">Add your image</div>
              </span>
            </label>

            <hr className='hline'></hr>
            <div className="description">What's on your mind?</div>
            <textarea
              className='desc2'
              name="description"
              value={newPostData.description}
              onChange={handleInputChange}
            ></textarea>
            <button className="publishBtn" onClick={handleCreateNewPost}>Publish</button>
          </div>

        </div>
      )}

      {posts.map((post, index) => (
        <Card
          key={index}
          name={post.name}
          imageSrc={post.imageSrc}
          content={post.content}
          onDelete={() => handleDeletePost(index)}
          onEdit={() => handleEditPost(index)}
        />
      ))}
    </div>
  );
};

export default PostList;
