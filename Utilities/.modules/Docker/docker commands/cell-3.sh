if docker ps | grep "{name}" then; \
    docker stop {name}; \
    docker rm {name}; \
fi
