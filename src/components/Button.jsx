import React, { useState } from "react";
import "./Button.css";

function LikeButton({ index, liked, handleLikeToggle }) {
    return (
        <button className={liked ? "liked" : ""} onClick={() => handleLikeToggle(index)}>
            {liked ? "Liked" : "Like"} - Button {index + 1}
        </button>
    );
}

function ButtonGroup({ count }) {
    const [likedButtons, setLikedButtons] = useState(Array(count).fill(false));

    const handleLikeToggle = (index) => {
        const updated = [...likedButtons];
        updated[index] = !updated[index];
        setLikedButtons(updated);
    };

    const totalLikes = likedButtons.filter(Boolean).length;

    return (
        <div className="button-group">
            <h2>Total Likes: {totalLikes}</h2>
            {likedButtons.map((liked, index) => (
                <LikeButton
                    key={index}
                    index={index}
                    liked={liked}
                    handleLikeToggle={handleLikeToggle}
                />
            ))}
        </div>
    );
}

export default ButtonGroup;
