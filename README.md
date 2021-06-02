# Run application
- node index.js

# Dockerize node application
1. docker build -t api-mysql .
2. docker images
3. docker run -p 8080:3000 -d api-mysql
4. docker exec -it <container id> /bin/bash -> Para entrar al bash del container


# Add feature-b

