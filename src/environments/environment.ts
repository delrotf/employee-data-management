// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBkxDAnjTwQ3sIAo8VnMaqU72D3kHt8gcc',
    authDomain: 'employee-data-management-e025e.firebaseapp.com',
    databaseURL: 'https://employee-data-management-e025e.firebaseio.com',
    projectId: 'employee-data-management-e025e',
    storageBucket: 'employee-data-management-e025e.appspot.com',
    messagingSenderId: '953026696159'
  }
};
