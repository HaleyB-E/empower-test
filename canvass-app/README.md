# How To Use
To run frontend: run `npm start` in `canvass-app` folder
To run backend: run `node server.js` in `canvass-app/server` folder
In order for app to work, start both frontend and backend. 
- App will be accessible at `localhost:3000`, and backend uses port 8080.
- Canvassing results added to the app will persist across page refresh, but not across backend restart (I didn't connect the app to a real database so it's just getting stored in a variable in the backend)
- NOTE: there's a race condition in the code that's loading the canvassing results which means you may *need* to refresh the page in order to see the results. This seems quite fixable but I didn't run into it until right as I was running out of time so I have not done so.

# Notes
- No generative AI was used in the creation of this project
- I initially hoped to use `next.js` to set this up. I've used `create-react-app` before so I'm more familiar with it, but it has been out of support for awhile and is no longer recommended for new projects. I've seen `next.js` recommended as a successor, but haven't had time to look into it much as my recent side project has had me focused on learning ruby on rails. It turns out `next.js` is way more opinionated than `create-react-app` in some ways that it's outside the scope of the take-home for me to learn well enough to produce something I feel comfortable turning in, so after about 45 minutes of hacking at it I am returning to the out-of-date option I know better.
- Stuff I did, approximately in order:
    - Basic, ugly frontend-only homepage
    - Basic, ugly frontend-only form to collect canvassing info
    - Updated form page to send canvass info to server (this doesn't save to a real database)
    - Update to homepage to load list of canvass responses from server
    - Make page styling consistent (not fancy, but less terrible)
    - Update app to support deleting items
- Intended updates I ran out of time for:
    - Update app to support editing items
At that point, basic CRUD for list + details page will be complete, and I'll start working on further visual polish.

# Limitations and Future Work

- For some reason I kept flopping between calling entries "canvass responses" and "canvass results" - I think I kept noticing "response" was a bad word to use when handling API stuff since it can be kind of confusing, but had already used it for some stuff in the frontend and didn't feel I had time to go back to change it. That would be something to target for cleanup if this were a real project

If I had written tests, they would be:
- verify that we can save new canvassing result and get OK response
- verify that we can load list of canvassing results and get expected number + type of responses
- verify that we can edit/delete existing canvassing results and only the targeted results would get edited/deleted (if edit/delete functionality is implemented)
- Verify that sending malformed canvassing result will not save inappropriate data (and various other things dependent on validation that I didn't implement)

If I had spent more time on validation, I would:
- sanitize text inputs to avoid injection attacks
- Make name required (and maybe also notes, but would need to assess based on product needs - sometimes it's useful just to know that someone was talked to)
- do better error handling in general (I think I called that out in a couple of specific places)

Other things that might spruce this up a bit that have not already been covered:
- Additional data (user is called out in the instructions, but date entered/edited would also be useful)
- consider easier keyboard navigation in new canvassing result entry - should "enter" submit from anywhere? should it move you to next textbox if you're in the name section? good way to increase efficiency for people doing lots of data entry, but need to make sure it's intuitive behavior

Everything below this is generated as part of create-react-app

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
