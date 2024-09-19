function psw_reset() {
email=document.getElementById("email").value;
 psw=document.getElementById("psw").value; 

  let user_data = JSON.parse(window.localStorage.getItem(email));

  var password = 'password_cred' ;
  
  if (psw == user_data[password]) {
    
    window.localStorage.removeItem(email);

    
    var key = document.getElementById('email').value;
    var password_cred = document.getElementById('new_psw').value;
    const User = {
     password_cred : password_cred,
     
    }
    
    window.localStorage.setItem(key,JSON.stringify(User));

    
    
    alert('Congrats, your password was changed!');
    window.location.href = "index.html";
    return true
  }
  else {
    alert('Email or password did not match ')
    return false
  }
  
}












/*
    var counter = 0
    while (counter < 1) {
     var a1 = prompt("LOGIN:Enter your email:"); a2 = prompt('LOGIN:Enter your old password');
     let user = JSON.parse(window.localStorage.getItem(a1));
    
    var email = 'email_cred' ;
    var password = 'password_cred' ;
   
     
     
     if  (a1 == user[email] && a2 == user[password]) {
     var a3 = prompt('Enter your new desired password here:');
     var key = prompt('Please re enter your email')
     
     window.localStorage.removeItem(key)
       
       
       const psw = {
        newPassword : a3
       } 
       window.localStorage.setItem(key,JSON.stringify(psw));
       
    
    alert('Congrats! Succesfully changed your password!');
    counter +=1
  
   }
   else
   {
     alert('failure yes, try again you will -yoda voice');
     counter += 0
   }
   }
   }*/
   