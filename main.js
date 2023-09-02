function validation(){
    var username = document.getElementById('exampleInputName1').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var cpassword = document.getElementById('exampleInputPassword2').value;
    var number = document.getElementById('exampleInputNumber1').value;


    var usercheck = /^[A-Za-z]{3,50}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}.{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^(?=.[0-9])(?=.[!@#$%^&*.]) [A-Za-z0-9_!@#$%^&*]{8,16}$/;


    if (usercheck.test(username)){
        document.getElementById('erroruser').innerHTML="";
    }
    else{
        document.getElementById('erroruser').innerHTML="Invalid Username";
        return false;
    }
    if (emailcheck.test(email)){
        document.getElementById('erroremail').innerHTML="";
    }
    else{
        document.getElementById('erroremail').innerHTML="Invalid Email";
        return false;
    }
    if (numbercheck.test(number)){
        document.getElementById('errornumber').innerHTML="";
    }
    else{
        document.getElementById('errornumber').innerHTML="Invalid Phone number";
        return false;
    }
    if (passwordcheck.test(password)){
        document.getElementById('errorpassword').innerHTML="";
    }
    else{
        document.getElementById('errorpassword').innerHTML="Invalid Password";
        return false;
    }
    if (cpassword.match(password)){
        document.getElementById('errorcpassword').innerHTML="";
    }
    else{
        document.getElementById('errorcpassword').innerHTML="Password doesn't match";
        return false;
    }
}