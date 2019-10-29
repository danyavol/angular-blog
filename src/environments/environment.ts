// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBMkPrtni1dNn-4TcUX_4MxR9eEtIIoRrU",
    authDomain: "angular-blog-4f8fa.firebaseapp.com",
    databaseURL: "https://angular-blog-4f8fa.firebaseio.com",
    projectId: "angular-blog-4f8fa",
    storageBucket: "angular-blog-4f8fa.appspot.com",
    messagingSenderId: "784113798281",
    appId: "1:784113798281:web:e102d15ee4d47f75cf0a58",
    measurementId: "G-HFGDGG6R60"
  },
  admin: {
    username: "admin",
    password: "admin"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
