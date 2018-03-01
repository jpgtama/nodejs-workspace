import React from 'react';
import databus from '../services/databus.js'

class TaskList extends React.Component {

  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillReceiveProps(newProps) {
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
  }
  componentDidUpdate(prevProps, prevState) {
  }
  componentWillUnmount() {
  }


  constructor(props) {
    super(props);

    this.state = {
       data: databus.getTaskList()
    }

    console.log(this.state.data)
  }

   render() {
      return (
         <div className="tasklist">
            <ul>
              {this.state.data.map(
                  (d, i) =>  <li key={i}>{d.name}</li>
              )}
            </ul>
         </div>
      );
   }
}
export default TaskList;
