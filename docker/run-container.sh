#! /bin/bash

# Starts running a docker container using the beta-sprayer-2 image. This image must have been built locally first.
docker run -p 3001:8000 -d beta-sprayer-2
