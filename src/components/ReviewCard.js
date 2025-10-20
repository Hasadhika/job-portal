// src/components/ReviewCard.js

import React from 'react';

function ReviewCard(props) {
  return (
    <div className="box">
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
      </div>
      <h3 className="title">{props.title}</h3>
      <p>{props.text}</p>
      <div className="user">
        <img src={props.userImage} alt="User" />
        <div>
          <h3>{props.userName}</h3>
          <span>{props.userTitle}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;