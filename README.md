# beta-sprayer
In the climbing world, beta is a term used to describe the moves to complete a climb. Beta spraying is offering unsolicited advice on how to climb a route. Perhaps a repo name like `give-me-beta` would be more appropriate and have a more positive connotation...

Anyhow, this repository's purpose is to host some code and instructions on how to spin up some test services and learn how to use Docker and Kubernetes.

We will have two services that need to communicate with each other through a simple REST API endpoint.

## Usage

### Install dependencies
```
npm install
```

### Running the app
```
npm start
```

You should be able to view the app at `http://localhost:8000/`.

### Testing
To run unit tests:
```
npm test
```

## Continuous Integration
This project uses [CircleCI](https://circleci.com/gh/bliu23/beta-sprayer) for continuous integration. You can find more details in [.circleci/config.yml](.circleci/config.yml).

## Deployments
If you're interested in Docker and Kubernetes, check out the [DEPLOYMENT.md](./DEPLOYMENT.md) file.