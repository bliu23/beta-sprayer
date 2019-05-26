# beta-sprayer
A repository to spin up some test services and learn how to use Docker and Kubernetes.

To run this service, simply run `npm start`.

## Docker
You can follow the official [Getting Started](https://docs.docker.com/get-started/) guide for reference. 

### Running Docker locally

To run this on a local docker container, you can run the following to build a docker image:
```
docker build --tag=beta-sprayer .
```

This builds your image in your machine's local Docker image registry. Remember, a registry contains repositories, and repositories contains a collection of images which are ready to run.

Next, you can run the app, mapping your machine's port to the container's exposed port.
```
docker run -p 3000:8080 beta-sprayer
```

This exposes the port 3000, and connects it to your application's server port 8080.

### Sharing your image

The notation for associating a local image with a repository on a registry is `username/repository:tag`. What this does is it uploads your image to some repository on Docker Hub, which can be accessed by anyone, anywhere! 

The first step is to tag your image
```
docker tag image username/repository:tag

# Example
docker tag beta-sprayer bliu23/beta-sprayer:0.0.0
```

Next, you want to push your image to Docker Hub.
```
docker push username/repository:tag

# Example
docker push bliu23/beta-sprayer:0.0.0
```

From here on out, you can use `docker run` and run your app. If the image you want to run is not available locally on your machine, Docker will automatically try to pull it from the repository.

```
docker run -p 3000:8080 bliu23/beta-sprayer:0.0.0
```

