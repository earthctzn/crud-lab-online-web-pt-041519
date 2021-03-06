import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    let reviewObj = { text: this.state.text, restaurantId: this.props.restaurantId }
    this.props.addReview(reviewObj)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
              type='text'
              placeholder='Review'
              value={this.state.text}
              onChange={this.handleOnChange}
            >
            </input>
            <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
