# Db13
Project containts a Typescript program which connects to the DB's (start them with docker first), and then benchmarks them.


## Neo4j
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

2. Load in the edges `social_network_edges`
```

```

## Mysql
1. Download the dump from `DOWNLOADLOCATION`
2. Run `./runMysql.sh`
3. Load the mysql dump file

## The Benchmarks


