# GistList

Gistlist is simple gists browser, it allows users to search gists on github.


## Plan

I will spare you the boring details and give you an outline how I approach a problem/task in general.

1. Rough sketch with paper and pencil. (sometimes on tissue paper)
2. Pull out my goto tool for design photoshop/sketch and create a mockup.
3. Write decent HTML and CSS make sure it looks like the design.
4. Add behavior using Javascript or a framework out there. (my current goto library is Reactjs).
5. Write e2e tests to make sure it works as expected.
6. Setup an environment for testing/stage/production.


## Howto

### Docker Setup

There is docker file included, execute following

##### `docker build -t gistlist .`

Builds a docker image with our app code, it could take some time depending on the connection.

##### `docker run -p 3000:3000 gistlist`

Executes the container

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Custom Setup

For custom setup `nodejs` and `npm` is required, please follow the instructions to install `nodejs` and `npm` for 

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

#### Available Commands

Assuming `nodejs` and `npm` installed successfully, In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## Future work

1. Optimize for mobile and tablet devices and browsers.
2. Write unit test for components and e2e tests.
3. Integrate a state management library. (e.g. Redux, Mobx)
4. Implement pagination.
5. Optimize caching strategy to adhere to github api for cache control.
