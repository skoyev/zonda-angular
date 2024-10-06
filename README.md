# IRIS Code Test Result

Implemented SubdivisionDataDisplayComponent load data from API, show data in the Data Table component. Implemented sorting by ID column, filter FE data by 
subdivisionStatusCode field, added unit tests

### Api Setup

To setup the api run the following:

Navigate to api folder: `cd iris-test-api`
Install packages: `npm install`
Run api: `npm run start`

Check the api is up and running by using:
`curl http://localhost:3000/v1/subdivisions`

### Angular app Setup

To setup the test script run the following:

At the root of the SEICodeTest folder run:
`npm install`

To run the script: `npm run start`

## Glossary

subdivision - An area of land containing lots or plots of land for property development <br />
subdivision status code - The status of the subdivision. Can either be: <br />
ACTIVE: This subdivision has ongoing construction <br />
FUTURE: This subdivision will have construction in the near future <br />
BUILT OUT: This subdivisions construction has been completed <br />
NearMap: NearMap is one of the providers used at Zonda satellite for our image data. <br />
