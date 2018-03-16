import React from 'react';
import databus from '../../services/databus.js'
import { Switch, Route } from 'react-router-dom';
import NewTask from './NewTask.jsx'
import TaskItem from './TaskItem.jsx'
import { Link } from 'react-router-dom'

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
         <div className="taskManager">
            <button>View Task List</button>

            <Link replace to='/taskManager/newTask'>
              <button>New Task</button>
            </Link>
            <hr/>

            <Route exact path='/taskManager/newTask' component={NewTask}/>


         </div>
      );
   }
}
export default TaskManager;
