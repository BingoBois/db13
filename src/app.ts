import Neo from './handler/neo4j';
const dotenv = require('dotenv').config()

class App{

    constructor(){
        console.log(Neo.findUser("0"));
    }

}

new App();
