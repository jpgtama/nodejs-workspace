import React from 'react';
import {Link} from 'react-router-dom';

class NewTask extends React.Component{
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

        // no state

    }

    render(){
        return (
            <div className="NewTask">
              <form method="POST" encType="multipart/form-data" action="/contextService-fileUploader/fileStore">
                  File to upload: <input type="file" name="upfile"/><br/>
                Notes about the file: <input type="text" name="note"/><br/>
                  <br/>
                  <input type="submit" value="Press"/> to upload the file!
              </form>

            </div>
        );
    }

}

export default NewTask;
