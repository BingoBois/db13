# Db13
Project containts a Typescript program which connects to the DB's (start them with docker first), and then benchmarks them.


## Assignment 1

### Neo4j
1. Download https://github.com/datsoftlyngby/soft2019spring-databases/raw/master/data/archive_graph.tar.gz and place the files in `importneo4j`
2. Run `./runNeo.sh`
3. Load in the nodes `social_network_nodes`
```
LOAD CSV WITH HEADERS FROM "file:///social_network_nodes.csv" AS line WITH line
CREATE (a:User { 
  node_id: line.`node_id`,
  name: line.`name`,
  job: line.`job`,
  birthday: line.`birthday`
});
```
4. Create indexes `CREATE INDEX ON :User(node_id)`
5. Load in the edges `social_network_edges`
```
LOAD CSV WITH HEADERS FROM "file:///social_network_edges.csv" AS line WITH line
MATCH (a:User),(b:User)
WHERE a.node_id = line.source_node_id AND b.node_id = line.target_node_id
CREATE (a)-[r:ACKNOWLEDGES]->(b)
```

### Mysql
1. Download the dump from `DOWNLOADLOCATION`
2. Run `./runMysql.sh`
3. Load the mysql dump file

## Assignment 2
Neo4J
```
MATCH (g:User {node_id: '0'})-[*1..3]->(other_node)
RETURN other_node
```

MySql
```
select * from knows
INNER JOIN persons ON knows.target_node_id = persons.node_id
where persons.node_id = 0
```

## The Benchmarks

## Nice to know

If you want to confirm whether there's a relation created between the users, use the following script:

```
MATCH (g:User {node_id: '0'})-[*1..3]->(other_node)
RETURN other_node
```

## 
The size of the data were immense, which caused loading times and port times to be several hours. We spent 6½ hours trying to import the very first set of data into MySQL, but in the end workbench crashed. We've been able to test on the smaller scale set of tables.
Neo4J took over 2 hours to get the relations created, and often would run out of ram (with 8 gb or so available through docker).

That also meant we couldn't do benchmarks properly. The library that Neo4J has made is also sub-par in terms of functionality - It doesn't work.




