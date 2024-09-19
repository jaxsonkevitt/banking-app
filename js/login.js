


 function check() {

    email=document.getElementById("email").value;
    psw=document.getElementById("psw").value; 
  let user_data = JSON.parse(window.localStorage.getItem(email));
  
  var password = 'password_cred' ;
  
  if (psw == user_data[password]) {
 
    
    return true;
  }
  else {
    alert('Email or password did not match ')
    return false
  }
  
  }
  
  