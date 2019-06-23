var firebaseConfig = {
    apiKey: "AIzaSyDbN8sSt30U8DtLv4JHKsMDSj70X4P1yYo",
    authDomain: "trains-d65a0.firebaseapp.com",
    databaseURL: "https://trains-d65a0.firebaseio.com",
    projectId: "trains-d65a0",
    storageBucket: "trains-d65a0.appspot.com",
    messagingSenderId: "770798326085",
    appId: "1:770798326085:web:2d420720f1c0e8f1"
  };
  firebase.initializeApp(firebaseConfig);
  
  var trains = firebase.database();
  