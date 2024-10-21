import { FC } from "react";
import { useState } from 'react';

import likeFilled from '../../assets/post/like-filled.svg';
import likeVoid from '../../assets/post/like-void.svg';
import comment from '../../assets/post/comments.svg';


import './styles.scss';

interface PostProps {
  imageUrl: string;
  description: string;
  username: string;
}

const Post: React.FC<PostProps> = ({ username, imageUrl, description }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setIsLiked(!isLiked);
  };

  const handleCommentButton = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
      setShowCommentInput(false);
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img className="post-header-image" />
        {username}
      </div>
      <div className="post-image">
        <img src={`${API_URL}/${imageUrl}`} alt="post" />
      </div>

      <div className="post-actions">
        <button onClick={handleLike} className="post-actions-button">
          <img src={isLiked ? likeFilled : likeVoid} alt="like" />
        </button>

        <button onClick={handleCommentButton} className="post-actions-button">
          <img src={comment} alt="comment" />
        </button>
      </div>

      <div className="post-likes">
        {likes} Me gusta
      </div>
      <div className="post-description">
        <strong>{username}</strong><span>{description}</span>
      </div>

      {
        comments.length > 0 && (
          <button className="post-comments-show">
            Ver los {comments.length} comentarios
          </button>
        )
      }

      <form className="comment-form" onSubmit={handleAddComment}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Agregar un comentario..."
          className="comment-input"
        />
        {
          newComment && (
            <button type="submit" className="comment-button">Publicar</button>
          )
        }
      </form>

      <div className="post-comments">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
