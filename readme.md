A simple hapi.js service used to experiment with continuous delivery on azure. Blog post can be found http://www.robjoh.com/hapi-js-azure-websites-and-continuous-deployment/

## Getting started
clone the repo
```
$npm install
```
## Running the server
```
$node index.js
$curl http://localhost:8080/
hello
```
## Running the tests
```
$npm run-script test
.
1 tests complete
Test duration: 0ms
No global variable leaks detected
```
## Azure deployment
The azure deploy.cmd has been modified to allow it to install lab & code and then execute the tests. So an Azure website setup for continuous deploy from this repo will verify tests and rollback the deployment on failure.