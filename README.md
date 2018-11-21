# GistList

Gistlist is simple gists browser, allows users to search gists for a user.

## Howto

### Docker Setup

There is docker file included, execute following

docker build -t gistlist .
docker run -p 3000:3000 gistlist

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Custom Setup

For custom setup `nodejs` and `npm` is required, please follow the instructions to install `nodejs` and `npm` for 

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

#### Available Commands

Assuming `nodejs` and `npm` installed successfully, In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!