const firebaseConfig = {
    apiKey: "AIzaSyD3VqJjt9duI9hzU2bSWvCK9KztkTUXd0A",
    authDomain: "loginpage-yt.firebaseapp.com",
    databaseURL: "https://loginpage-yt-default-rtdb.firebaseio.com",
    projectId: "loginpage-yt",
    storageBucket: "loginpage-yt.appspot.com",
    messagingSenderId: "930027864372",
    appId: "1:930027864372:web:65f7b8e2f30dff44156561",
    measurementId: "G-E8S8VY8EZ1"
  };

  firebase.initializeApp(firebaseConfig);
  var loginpageDB= firebase.database().ref('loginpage')
  document.getElementById('loginpage').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var password = getElementVal('password');
    // var confirmpass = getElementVal('confirm');

    saveMessages(name, password);
}

const saveMessages = (name,password) => {
    var newlogin = loginpageDB.push();
    newlogin.set({
        name: name,
        password: password,
      });

};
  const getElementVal = (id) => {
    return document.getElementById(id).value;


  }
