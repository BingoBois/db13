docker build -t ownmysql:latest -f Dockerfile.mysql .
docker run --rm --name my_mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret85 -d ownmysql:latest
#docker exec my_mysql mysql -u root --password=secret85 -e "CREATE DATABASE testdb;"
