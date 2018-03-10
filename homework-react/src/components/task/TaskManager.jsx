import React from 'react';
import databus from '../../services/databus.js'

import TaskItem from './TaskItem.jsx'

class TaskManager extends React.Component {

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
  }

   render() {
      return (
         <div className="tasklist">
            <button>View Task</button>
            <button>New Task</button>

         </div>
      );
   }
}
export default TaskManager;
