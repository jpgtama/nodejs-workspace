import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component{
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
        super(props);

        // state



    }

    render(){
      var ulStyle = {
        listStyleType: 'none'
      };
      var liStyle = {
          display: 'inline-block'
      };


        return (
          <header>
            <nav>
              <ul className="ulStyle">
                <li className="liStyle"><Link replace to='/'>Home</Link></li>
                <li className="liStyle"><Link replace to='/taskList'>TaskList</Link></li>
              </ul>
            </nav>
          </header>

        );
    }

}

export default Header;
