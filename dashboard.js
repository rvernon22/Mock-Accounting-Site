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
  const database = firebase.database()


 //the function adds a single row to the body of the table on the dashboard page
 function AddItemToTable(username, email, role) { 
    let trow = document.createElement("trow"); //creates a row in the table, below are the cells of the row
    let td1 = document.createElement("td");   //td1 is the cell that has the username
    let td2 = document.createElement("td");   //td2 is the cell that has the email
    let td3 = document.createElement("td");   //td3 is the cell that has the role
    let td4 = document.createElement("td");   //td4 is the cell that has the add button
    let td5 = document.createElement("td");   //td5 is the cell that has the edit button
    let td6 = document.createElement("td");   //td6 is the cell that has the remove button
    let addButton = document.createElement("button");
    let editButton = document.createElement("button");
    let removeButton = document.createElement("button");
  
    td1 = username; //takes in parameters passed in by function into cells
    td2 = email;
    td3 = role;
  
    td4.appendChild(addButton); //adds the 'add' 'edit' and 'remove' buttons to these cells
    td5.appendChild(editButton);
    td6.appendChild(removeButton);
  
    trow.appendChild(td1); //combines the cells into the row
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    
  
    tbody.appendChild(trow); //adds the row to the body of the table
  
  }
  
  //the function passes in database as an array and uses the AddItemToTable function to add each array element 1 by 1
  function AddAllItemsToTable(databaseArray) {
    
    tbody.innerHTML=""; //empties the table so that duplicate data is not added
    databaseArray.forEach(element => {
      AddItemToTable(element.Username, element.Email, element.Role)
    })
  }
  
  
  function GetAllDataRealTime(){  //gets all data from the database
    const dbreference = ref(database, "users"); //creates a reference variable the retrieves user data from database
  
    onValue(dbreference, (snapshot)=> { //snapshot is the data
      let databaseArray = []; //takes the snapshot and puts it into an array
  
      snapshot.forEach(childSnapShot => { 
        databaseArray.push(childSnapShot.val()); //goes through the database and puts everything into the array
      });
      AddAllItemsToTable(databaseArray); //passes the array to the function
    })
    
  }
  let Address, DOB, Email, FirstName, LastName, Password, Role, Username;
  function Ready(){
    Address= document.getElementById('Address').value;
    DOB= document.getElementById('DOB').value;
    Email= document.getElementById('Email').value;
    FirstName= document.getElementById('FirstName').value;
    LastName= document.getElementById('LastName').value;
    Password= document.getElementById('Password').value;
    Role= document.getElementById('Role').value;
    Username= document.getElementById('Username').value;
  }

  function closePopup() {
    popup.classList.remove("open-popup");
  }
  
  function addButton(){// Adds information to the user database
    Ready();
    firebase.database().ref('user/'+user.uid).set({//Pushes a new user into database
      address: Address, //Allocating user input into the appropriate data field
      dob: DOB, 
      email: Email,
      first_name: FirstName,
      last_name: LastName, 
      password: Password, 
      role: Role, 
      username: Username
    });
    closePopup();
  }
  
  function editButton(){
    Ready();
    firebase.database().ref('user/'+user.uid).update({//Updates a user in the database
      address: Address, 
      dob: DOB, 
      email: Email,
      first_name: FirstName,
      last_name: LastName, 
      password: Password, 
      role: Role, 
      username: Username
    });
    closePopup();
  }
  function removeButton(){
    Ready();
    firebase.database().ref('user/'+user.uid).remove()//Deletes from database
  }

  let popup = document.getElementById("popup"); //initializes a variable to reference the popup element
  function openPopupAdd() {
    popup.classList.add("open-popup");
    document.getElementById('submitButton').setAttribute("onClick", "addButton()"); //changes the onclick event of the submit button to use the addButton() function
  }

  function openPopupEdit() {
    popup.classList.add("open-popup");
    document.getElementById('submitButton').setAttribute("onClick", "editButton()"); //changes to the submit button to use the editButton() function
  }