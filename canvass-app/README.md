Notes from Haley:
- No generative AI was used in the creation of this project
- I initially hoped to use `next.js` to set this up. I've used `create-react-app` before so I'm more familiar with it, but it has been out of support for awhile and is no longer recommended for new projects. I've seen `next.js` recommended as a successor, but haven't had time to look into it much as my recent side project has had me focused on learning ruby on rails. It turns out `next.js` is way more opinionated than `create-react-app` in some ways that it's outside the scope of the take-home for me to learn well enough to produce something I feel comfortable turning in, so after about 45 minutes of hacking at it I am returning to the out-of-date option I know better.
- Steps I plan to take to solve this problem:
    - Basic frontend-only page: form to collect canvassing info
    - Basic frontend-only page: display list of collected info
    - Update form page to send canvass info to server (I will not be interacting with a real sql server, but will fake it in some way here)
    - Update list page to retrieve canvass info from server
    - Update app to support deleting items
    - Update app to support editing items
At that point, basic CRUD for list + details page will be complete, and I'll start working on polish:
- Using next.js' Form implementation rather than generic `form`
- Using styling that isn't what came with the next.js framework's default page

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
