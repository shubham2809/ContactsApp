This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Open [http://localhost:5000](http://localhost:5000) to access the locla API.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# The App

  - A simple Contact app with ability to search, edit , view and delete contacts

### Tech

It uses a number of open source projects to work properly:

* [React.js](https://reactjs.org/) - HTML enhanced for web apps!
* [Redux](https://redux.js.org/) - HTML enhanced for web apps!


### Project Structure

The Poject is well structured `components` , `actions`, `reducer` and `store`.

```sh
├── README.md
├── db.json
├── package-lock.json
├── package.json
└── src
   ├── App.css
   ├── App.js
   ├── Components
   |  ├── Contacts
   |  ├── Modals
   |  └── layout
   ├── actions
   |  ├── actionTypes.js
   |  └── contactsActions.js
   ├── axios.js
   ├── index.css
   ├── index.js
   ├── reducers
   |  ├── contactsReducer.js
   |  └── index.js
   └── store
      └── store.js

```

### State

The initial application is fetched from the API, Until it fetches the data, UI shows an animated loader

| state | description |
| ------ | ------ |
| contacts | Array of contacts that is rendered |
| current | Selected contact to edit or view|
| loading | If it's value is true UI will show an loader|
| error | Any erros caused by side-effect |
