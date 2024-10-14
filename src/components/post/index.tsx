import { FC } from "react";
import { useState } from 'react';
import './styles.scss';

interface PostProps {
    imageUrl: string;
    description: string;
    username: string;
}

const Post: React.FC<PostProps> = ({ username, imageUrl, description }) => {
    const [likes, setLikes] = useState(0); // Estado para el contador de likes
    const [isLiked, setIsLiked] = useState(false); // Estado para controlar si el usuario dio "Me gusta"
    const [comments, setComments] = useState<string[]>([]); // Estado para los comentarios
    const [newComment, setNewComment] = useState(''); // Estado para el nuevo comentario
    const [showCommentInput, setShowCommentInput] = useState(false); // Mostrar u ocultar el input de comentarios


    // Función para manejar el click en el botón de "Me gusta"
    const handleLike = () => {
        if (isLiked) {
            // Si ya dio "Me gusta", lo quita y decrece el contador
            setLikes(likes - 1);
        } else {
            // Si no ha dado "Me gusta", lo agrega y aumenta el contador
            setLikes(likes + 1);
        }
        // Alterna el estado de "Me gusta"
        setIsLiked(!isLiked);
    };

    // Función para mostrar el campo de comentarios
    const handleCommentButton = () => {
        setShowCommentInput(!showCommentInput);
    };

    // Función para manejar el envío de comentarios
    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment(''); // Limpiar el campo de texto después de enviar
            setShowCommentInput(false); // Ocultar el campo de comentarios después de enviars
        }
    };

    return (
        <div className="post">
            <div className="post-header">
                {username}
            </div>
            <div className="post-image">
                <img src={imageUrl} alt="post" />
            </div>

            {/* Botones de interacción */}
            <div className="post-actions">
                <button onClick={handleLike} className="like-button">
                    {isLiked ? '❤️' : '🤍'} {/* Corazón relleno o sin relleno según el estado */}
                </button>

                {/* Botón de comentarios */}
                <button onClick={handleCommentButton} className="comment-button">
                    💬 {/* Icono de comentario */}
                </button>

            </div>

            {/* Contador de Me gustas */}
            <div className="post-likes">
                {likes} Me gusta{likes !== 1 ? 's' : ''}
            </div>
            <div className="post-description">
                <p>{description}</p>
            </div>

            {/* Campo de agregar comentario si está visible */}
            {showCommentInput && (
                <form className="comment-form" onSubmit={handleAddComment}>
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Agregar un comentario..."
                        className="comment-input"
                    />
                    <button type="submit" className="submit-comment-button">Publicar</button>
                </form>
            )}

            {/* Lista de comentarios */}
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
