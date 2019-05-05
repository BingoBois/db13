const neo4j = require('neo4j-driver').v1;
import { IPerson } from '../types/types'
const dotenv = require('dotenv').config()

class NeoHandler {

    public driver: any;
    public session: any;

    constructor() {
        if(!process.env.NEO4J_URL){
            throw Error("NO ENVIRONMENT VARIABLES SET!!!!")
        }
        this.driver = neo4j.driver(
            process.env.NEO4J_URL ? process.env.NEO4J_URL : "", 
            neo4j.auth.basic(process.env.NEO4J_USER ? process.env.NEO4J_USER : "", 
            process.env.NEO4J_PASS ? process.env.NEO4J_PASS : "")
        );
        this.session = this.driver.session();
    }

    public findUser(node_id: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try{
                const session = await this.session.run('MATCH (a:Person {node_id: $node_id}) RETURN a',{node_id: node_id});
                
                const result = await session;
            }catch(err){
                console.error(err);
                reject(err);
            }
            
        })
    }

    public addNode(person: IPerson): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try{
                const session = await this.session.run(`
                CREATE (a:User { 
                    node_id: $node_id,
                    name: $name,
                    job: $job,
                    birthday: $birth 
                  });
                `,{person});
                
                session.then((result:any) => {
                session.close();
                });
            }catch(err){
                console.error(err);
            }
            
        })
    }
}

const dbHandler = new NeoHandler();

export default dbHandler;

/*
GET RANDOM NODE

MATCH (u:User)
WITH u, rand() AS number
RETURN u
ORDER BY number
LIMIT 1
*/