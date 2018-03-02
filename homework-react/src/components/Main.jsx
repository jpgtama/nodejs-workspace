import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import TaskList from './task/TaskList.jsx'
import TaskItemDetail from './task/TaskItemDetail.jsx'

class Main extends React.Component{
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


    constructor(props){
        // props should be a task object
        super(props);

        // state

    }

    render(){
        return (
          <main>
             <Switch>
               <Route exact path='/' component={Home}/>
               <Route exact path='/taskList' component={TaskList}/>
               <Route exact path='/taskItemDetail/:id' component={TaskItemDetail}/>

             </Switch>
         </main>
        );
    }

}

export default Main;
