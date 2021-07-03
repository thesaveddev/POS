// const axios = require('axios');
// const fetch = require('node-fetch');

module.exports = 
//show the home page
          (req, res) => {
          //   fetch('https://jsonplaceholder.typicode.com/todos')
          //   .then(res => res.json())
          //   .then(json => {
          //   //   for(todo of res.data) {
          //   //     console.log(todo.userId)
          //   // }
          //   console.log(json)
          // })          
            return res.render('index', {title:'Login', error:''})
            }     