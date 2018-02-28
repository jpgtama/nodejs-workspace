import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       header: "Header from props...",
       content: "Content from propss..."
    }
 }
 render() {
    return (
       <div>
          <Header headerProp = {this.state.header}/>
          <Content contentProp = {this.state.content}/>
       </div>
    );
 }
}
App.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}


class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.mkey} </td>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}


export default App;
