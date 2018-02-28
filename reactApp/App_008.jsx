import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         data: ''
      }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
      console.log('this.refs.myInput', this.refs.myInput);
      window.myInput = this.refs.myInput;
   }
   render() {
      return (
         <div>
            <input value = {this.state.data} onChange = {this.updateState}
               ref = "myInput"></input>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}

export default App;
