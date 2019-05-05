docker build -t ownneo4j -f Dockerfile.neo4j .
docker run -d --name ownneo4j --rm --publish=7474:7474 --publish=7687:7687 --env NEO4J_AUTH="neo4j/mingade" --env NEO4J_dbms_memory_pagecache_size=4G --env=NEO4J_dbms_memory_heap_initial__size=4G --env=NEO4J_dbms_memory_heap_max__size=4G ownneo4j
