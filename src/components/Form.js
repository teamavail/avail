import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('You did a thing!');
  }


  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <input
      name='username'
      type='text'
      value={this.state.username}
      onChange={this.handleInputChange}
    />
    <input
      name='password'
      type='password'
      value={this.state.password}
      onChange={this.handleInputChange}
    />
    <button  type='submit'>Login</button>
    </form>
    )
  }
}

export default Form;
