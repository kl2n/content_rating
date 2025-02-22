
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState(prevState => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike: () => {
        this.setState(prevState => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    }
  };
  render() {
    return (
      <>
        <div className="content-rating">
            <h2>What is Lorem Ipsum?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="rating-buttons">
              <button type="btn" className='like-button' onClick={this.state.handleLike}>
                  likes ({this.state.likes})
              </button>
              <button type="btn" className='dislike-button' onClick={this.state.handleDislike}>
                  dislike ({this.state.dislikes})
              </button>
              <div className="total-ratings">
                  total rating: {this.state.totalRatings}
              </div>
            </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
