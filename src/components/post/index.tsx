import { FC, useEffect } from "react";
import { useState } from 'react';
import { fetchPost, addComment, deleteComment } from "../../api";

import likeFilled from '../../assets/post/like-filled.svg';
import likeVoid from '../../assets/post/like-void.svg';
import comment from '../../assets/post/comments.svg';


import './styles.scss';
import { useNavigate } from "react-router-dom";

interface PostProps {
  id: string;
  imageUrl: string;
  description: string;
  username: string;
  comments: Comment[];
  profilePicture: string;
}

interface Comment {
  _id: string;
  content: string;
}

const Post: React.FC<PostProps> = ({
  id,
  username,
  imageUrl,
  description,
  comments: commentsFromBack,
  profilePicture,
}) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>(commentsFromBack);
  const [newComment, setNewComment] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const loadPost = async () => {
      try {
        const post = await fetchPost(id);
        setLikes(post.likes || 0);
        setComments(post.comments || []);
      } catch (error) {
        console.error("Error loading post:", error);
      }
    };
    loadPost();
  }, [id]);

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

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log(id)
      const addedComment = await addComment(id, newComment);
      setComments([...comments, addedComment]);
      setNewComment("");
      setShowCommentInput(false);
    }
  };

  const handleGoToProfile = () => {
    navigate(`/profile/${id}`);
  }

  const handleDeleteComment = async (commentId: string) => {
    await deleteComment(id, commentId);
    setComments(comments.filter(comment => comment._id !== commentId));
  };

  const toggleShowComments = () => {
    setShowComments(!showComments);
  };


  return (
    <div className="post">
      <div className="post-header" onClick={handleGoToProfile}>
        <img className="post-header-image" src={profilePicture} alt="avatar" />
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
        showComments && (
          <div className="post-comments">
            {comments.map((comment) => (
              <div key={comment._id} className="comment">
                <span>{comment.content}</span>
                <button onClick={() => handleDeleteComment(comment._id)}>Eliminar</button>
              </div>
            ))}
          </div>
        )
      }

      {
        comments.length > 0 && (
          <button onClick={toggleShowComments} className="post-comments-show">
            {showComments ? "Ocultar comentarios" : `Ver los ${comments.length} comentarios`}
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
    </div>
  );
}

export default Post;
