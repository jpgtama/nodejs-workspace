import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import TaskList from './TaskList.jsx'

class App extends React.Component {
   render() {
      return (
         <Router>
             <div className="app">
                Hello Homework!!!
                <TaskList />

                <Switch>
                    <Route exact path='/taskItem' render={()=>'TaskItem xxx'} />
            
                 </Switch>

             </div>
         </Router>
      );
   }
}
export default App;
