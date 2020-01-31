# ice-cream-app
> Single page application with github and facebook authorization. Website text is Russian.

## Quick Start

```bash
# Step 1 Clone repo
git clone git@github.com:konstantindergachev/ice-cream-app.git

# Step 2 Install dependencies
yarn install -i or npm install

# Step 3 The real data stored in the firebase
You need to create base.js file with:
1) api key
2) auth domain;
3) databaseURL;

For example, base.js such like this:
import firebase from 'firebase';
import Rebase from 're-base';

export const firebaseApp = firebase.initializeApp({
  apiKey: '***********************************',
  authDomain: '****************************************',
  databaseURL: '***************************************',
};

export const base = Rebase.createClass(firebaseApp.database());

# Step 4 Use your own social icons
# Step 5 Use your own favicon.ico such like this: src/favicon.ico and favicon directory such like this: src/img/favicon
# Step 6 Start the development server with hot reloading enabled
yarn run dev or npm run dev

# Step 7 Build for production
yarn run build or npm run build

# Step 8 Follow Firebase guide to use the Firebase JavaScript SDK for deploy web app
# Step 9 Dummy data is in the src/js/data/data.js

## Info
### Author
Konstantin Dergachev

### Version
1.0.0

### License
This project is licensed under the MIT License