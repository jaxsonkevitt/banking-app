function disp(){

    x=document.getElementById("t1");
    
    x.style.visibility = "hidden";
    
    }
    
    // function where when button "reset" is clicked, function resetALL is called making all fields in from empty again"

function resetAll(){
    
    x=document.getElementById("t1");
    
    x.style.visibility = "hidden";
    
    document.getElementById("email").value="";
    
    document.getElementById("email2").value="";
    
    
    document.getElementById("fname").value="";
    
    document.getElementById("lname").value="";
    
    document.getElementById("city").value="";
    
    document.getElementById("state").value="";
    
    document.getElementById("zip").value="";
    
    document.getElementById("gross").value="";
    
    document.getElementById("ssn").value="";
    
    document.getElementById("agree").checked=false;
    
    }
    
    
    //function where when button "Apply" is clicked, function valid() is called it will do the following things:

    // 1. check to see if both emails entered and if emailsl match, then check if first name is entered, is not true will promt error msg
    // 2. check to see if all fields are filled , if anyone one of fields in not filled, will display a a table which shows users what fields are invalid
    // 3. check see if gross income is > 45,000, if true will display approved msg, if false will display disapproved msg
    
    function valid(){
    
    x=document.getElementById("t1");
    
    x.style.visibility = "hidden";
    
    document.getElementById("error").innerHTML="";
    
    document.getElementById("error2").innerHTML="";
      
    document.getElementById("error3").innerHTML="";
    
    email=document.getElementById("email").value;
    
    email2=document.getElementById("email2").value;
    
    fname=document.getElementById("fname").value;
    
    lname=document.getElementById("lname").value;
    
    city=document.getElementById("city").value;
    
    state=document.getElementById("state").value;
    
    zip=document.getElementById("zip").value;
    
    gross=document.getElementById("gross").value;
    
    ssn=document.getElementById("ssn").value;
    
    agree=document.getElementById("agree");
    
    
    fname_mess="";
    
    lname_mess="";
    
    city_mess="";
    
    state_mess="";
    
    zip_mess="";
    
    gross_mess="";
    
    ssn_mess="";
    
    agree_mess="";
    
    flag=0;
    
    let errors = [];

    if (email == "") {
        errors.push("Email is required.");
    }

    if (email2 == "") {
        errors.push("Re-enter Email is required.");
    }

    if (email != email2) {
        errors.push("Emails do not match.");
    }

    if (fname == "") {
        errors.push("First Name is required.");
    }

    if (lname == "") {
        errors.push("Last Name is required.");
    }

    if (city == "") {
        errors.push("City is required.");
    }

    if (state == "") {
        errors.push("State is required.");
    }

    if (zip == "") {
        errors.push("ZIP Code is required.");
    }

    if (gross == "") {
        errors.push("Gross Income is required.");
    }

    if (ssn == "") {
        errors.push("Last 4 digits of SSN is required.");
    }

    if (!agree.checked) {
        errors.push("You must agree to the terms.");
    }

    if (errors.length > 0) {
        // Show popup with all errors
        alert("Please correct the following errors:\n\n" + errors.join("\n"));
        return;
    }

    if (email==""){
    
    document.getElementById("error").innerHTML="This field is required.";
    
    return;
    
    }
    
    if(email2==""){
    
    document.getElementById("error2").innerHTML="This field is required.";
    
    return;
    
    }
    
    if(email!=email2){
    
    document.getElementById("error2").innerHTML="This entry must equal the first entry";
    
    return;
    
    }
    
    if(fname==""){
    
    document.getElementById("error3").innerHTML="This field is required.";
    
      return;
    }
    
    else
    
    {
    
    fname_mess=fname;
    
    }
    
    if(lname==""){
    
    lname_mess="Last name is empty";
    
    flag=1;
    
    }
    
    else
    
    {
    
    lname_mess=lname;
    
    }
    
    if(city==""){
    
    city_mess="City is empty";
    
    flag=1;
    
    }
    
    else{
    
    city_mess=city;
    
    }
    
    if(state==""){
    
    state_mess="State is empty";
    
    flag=1;
    
    }
    
    else{
    
    state_mess=state;
    
    }
    
    if(zip==""){
    
    zip_mess="Zip is empty";
    
    flag=1;
    
    }
    
    else{
    
    zip_mess=zip;
    
    }
    
    if(gross==""){
    
    gross_mess="Gross is empty";
    
    flag=1;
    
    }
    
    else{
    
    gross_mess=gross;
    
    }
    
    if(ssn==""){
    
    ssn_mess="SSN is empty";
    
    flag=1;
    
    }
    
    
    else
    
    {
    
    ssn_mess=ssn;
    
    }
    
    if(!agree.checked){
    
    agree_mess="Agree check box not selected";
    
    flag=1;
    
    }
    
    else{
    
    agree_mess="Agreed";
    
    }
    
    
    if(flag==1){
    
    x=document.getElementById("t1");
    
    x.style.visibility = "visible";
    
    document.getElementById("t1").rows[1].cells[1].innerHTML=email
    
    document.getElementById("t1").rows[2].cells[1].innerHTML=fname_mess
    
    document.getElementById("t1").rows[3].cells[1].innerHTML=lname_mess
    
    document.getElementById("t1").rows[4].cells[1].innerHTML=city_mess
    
    document.getElementById("t1").rows[5].cells[1].innerHTML=state_mess
    
    document.getElementById("t1").rows[6].cells[1].innerHTML=zip_mess
    
    document.getElementById("t1").rows[7].cells[1].innerHTML=gross_mess
    
    document.getElementById("t1").rows[8].cells[1].innerHTML=ssn_mess
    
    document.getElementById("t1").rows[9].cells[1].innerHTML=agree_mess
    
    flag=0;
    
    }
    
    else{
    
    x=document.getElementById("t1");
    
    x.style.visibility = "hidden";
    
    if( parseFloat(gross)>45000){
    
    alert("Congratulations, Your are prequalified for a loan. A representative will contact you soon.");
    
    }
    
    else{
    
    alert("We're sorry, you do not qualify for a loan at this time");
    
    }
    
    }
    
    
    }