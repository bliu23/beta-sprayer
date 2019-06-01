## Docker
You can follow the official [Getting Started](https://docs.docker.com/get-started/) guide for reference. This section contains information on how to build a single docker image, tag it, and run it! It also goes over how to push it to a registry via Docker Hub.

### Basic Terminology
* `Docker`: A platform for developers to develop, deploy, and run applications with containers. The following definitions are defined keeping in mind Docker context.

* `image`: An executable package that includes everything needed to run an application -- the code, a runtime (i.e. Node 8), libraries, environment variables, and config files.

* `container`: A docker container is a runtime instance of an image -- what the image becomes in memory when executed. All the code and dependencies are packaged up so the application can reliably run from one computing environment to another. The analogy that makes sense to me is that an `image` is like a `class`, and a `container` is like an `object` (instance of that class).

* `repository`: A repository is a collection of images.

* `registry`: A registry is a collection of repositories.

### Running Docker locally

To run this on a local docker container, navigate to the directory with your `Dockerfile`. You can run the following to build a docker image:

```
docker build --tag=tag_name directory

# Example
docker build --tag=beta-sprayer .
```

This builds your image in your machine's local Docker image registry. Remember, a registry contains repositories, and repositories contains a collection of images which are ready to run.

Next, you can run the app, mapping your machine's port to the container's exposed port.
```
docker run -p host-port:container-port image

# Example
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

## Kubernetes

Install Kubernetes, minikube, and kubectl

### 1a. Deploying Manually
Create kubernetes deployment. The port you specify is the `containerPort`, which should match the port exposed by your Docker container. For now, this service is only accessible within the cluster.
```
kubectl run beta-sprayer --image=bliu23/beta-sprayer-2:0.0.0 --port=8000
```

Open up another terminal window and spin up a proxy to the outside world:
```
kubectl proxy
```

### 1b. Deploying with a .yaml file
Alternatively, you can use the `simple-deployment.yaml` file which represents a deployment.
```
kubectl apply -f simple-deployment.yaml
```

### Accessing you deployments
If you visit localhost:8001 you can peek inside. 

Now, get the pod name which you'll need in the next step
```
kubectl get pods

NAME                                    READY     STATUS    RESTARTS   AGE
beta-sprayer-a1ph4num3r1c-c0mb0   1/1       Running   0          4m
```

Then, you can hit the service via the `kubectl proxy` command you are running, replacing `POD_NAME` with your pod's name.
```
curl http://localhost:8001/api/v1/namespaces/default/pods/POD_NAME/proxy/
```

When you're done, you can delete the deployment with this command:
```
kubectl delete deployment.apps/beta-sprayer
```
