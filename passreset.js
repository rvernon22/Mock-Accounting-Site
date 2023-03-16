var firebaseConfig = {
    apiKey: "AIzaSyBWpF4OjwvJ_jTku6QT18MoA078UNo1GDk",
    authDomain: "project-demo-249e9.firebaseapp.com",
    databaseURL: "https://project-demo-249e9-default-rtdb.firebaseio.com",
    projectId: "project-demo-249e9",
    storageBucket: "project-demo-249e9.appspot.com",
    messagingSenderId: "489620783719",
    appId: "1:489620783719:web:fcc19378b7429476a38ac2",
    measurementId: "G-85Y0XZ34FP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  




  function reset()
  {
    email = document.getElementById('email').value;
    validate_email(email);
    var database = firebase.database();
    //password = document.getElementById('password').value

    q1 =  document.getElementById('q1').value;
    q2 =  document.getElementById('q2').value;

    if(q1 == "shallowford" && q2 == "passat")
    {
        passwordReset();
    }else{alert('Something isnt right')}


  }

  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }

  function passwordReset()
  {
    //var user = firebase.auth().currentUser;

    auth.sendPasswordResetEmail(email).then(() =>
    {
    // email sent 
    alert('Password Reset Email Sent')
    }).catch(error => {
        alert('error')
    });
  }

  function validate_password(password) {
    // Firebase only accepts lengths greater than 6;
    if (/^.{10,16}$\S*$(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
      alert('Password is either <8, start with #, or no special character')
      return false
    } else {
      return true
    }
  }