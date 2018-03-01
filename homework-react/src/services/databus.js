// data bus is used to communicate with back end

import axios from 'axios'

// axios.get('http://calapi.inadiutorium.cz/api/v0/en/calendars')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


var databus = {};

databus.getTaskList = function(){



  return [{name:'Task 001', id:''}, {name:'Task 002', id:''}];
};
















// export
export default databus;
