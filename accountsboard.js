// Your web app's Firebase configuration
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
  
  var accNum, desc, desc2, desc3, desc4, desc5, desc6, desc7, desc8, desc9, desc10;
  var Subcategory, Subcategory2, Subcategory3, Subcategory4, Subcategory5, Subcategory6, Subcategory7, Subcategory8, Subcategory9, Subcategory10; 
  var Initial, Initial2, Initial3, Initial4, Initial5, Initial6, Initial7, Initial8, Initial9, Initial10;
  var Debit, Debit2, Debit3, Debit4, Debit5, Debit6, Debit7, Debit8, Debit9, Debit1;
  var Credit, Credit2, Credit3, Credit4, Credit5, Credit6, Credit7, Credit8, Credit9, Credit10;
  var Balance, Balance2 , Balance3 , Balance4 , Balance5 , Balance6 , Balance7 , Balance8 , Balance9 , Balance10;
  var Time, Time2 , Time3 , Time4 , Time5 , Time6 , Time7 , Time8 , Time9 , Time10;
  var user_ID, user_ID2 , user_ID3 , user_ID4 , user_ID5 , user_ID6 , user_ID7 , user_ID8 , user_ID9 , user_ID10;
  var Order, Order2 , Order3 , Order4 , Order5 , Order6 , Order7 , Order8 , Order9 , Order10;
  var RE, RE2 , RE3 , RE4 , RE5 , RE6 , RE7 , RE8 , RE9 , RE10;
  var Comment1, Comment2 , Comment3 , Comment4 , Comment5 , Comment6 , Comment7 , Comment8 , Comment9 , Comment10;
    // Get all our input fields
    function Send()
    {
        accNum = document.getElementById('accNum').value;
        desc = document.getElementById('desc').value;
        Subcategory = document.getElementById('Subcategory').value;
        Initial = document.getElementById('Initial').value;
        Debit = document.getElementById('Debit').value;
        Credit = document.getElementById('Credit').value;
        Balance = document.getElementById('Balance').value;
        Time = document.getElementById('Time').value;
        user_ID = document.getElementById('user_ID').value;
        Order = document.getElementById('Order').value;
        RE = document.getElementById('RE').value;
        Comment1 = document.getElementById('Comment1').value;
    }

    document.getElementById('Submit').onclick = function(){
        Send();
        firebase.database().ref('Account/'+accNum).set({
            accNum : accNum,
            desc: desc,
            Initial: Initial,
            Debit: Debit,
            Credit: Credit,
            Balance: Balance,
            Time: Time,
            user_ID: user_ID,
            RE: RE,
            Comment1: Comment1
        });
        alert('IT WORKED')
    }

