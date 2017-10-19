# Format

General notebook formatting is simple:

Markdown cell: What question does this code set out to answer?

```
# How to use Docker?
```

Code cell: A short function with any necessary definition functions?
```
docker run <container-name>
```

Code cell: A test for the previous function.
```
docker run <container-name>
if docker ps | grep <container-name> then; \
    echo "container is running"; \
else; \
    echo "docker failed to start container"; \
fi;
```
