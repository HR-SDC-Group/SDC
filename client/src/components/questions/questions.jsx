import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Display from './display.jsx';
const auth = require('../../../../config.js');

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {productQuestion: []};
    this.getQuestions();
  }

  //write axios get request that queries database for
  getQuestions = () => {
    const productId = this.props.productId;
    axios({
      method: 'get',
      url: '/productQuestions',
      headers: {
        id: `${productId}`
      }
    })
    .then( response => {
      this.setState({productQuestion: response.data.results})
    })
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div>
        Info below
        <div>
          {this.state.productQuestion.map( question =>
            <Display question={question} key={question.question_id}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Questions;