function UserName() {
  var usr = document.getElementById('usr').value;

  if ((usr == "")||(usr.length > 8)||(usr.length < 4)||(!isNaN(usr))){
    document.getElementById('usr_wrong').innerHTML = "UserName should between 4 and 8 charecters & not be a number";
      return false;
    }
  else {
      document.getElementById('usr_wrong').innerHTML = "";
        return false;
    }
}

function phoneno() {
  var phoneno = document.getElementById('phone').value;

  if ((phoneno == "")||(phoneno.length != 11)){
    document.getElementById('phone_wrong').innerHTML = "Phone No should be 11 digits";
      return false;
    }
  else {
      document.getElementById('phone_wrong').innerHTML = "";
        return false;
    }
}

function password() {
  var pass = document.getElementById('pass').value;

  if ((pass == "")||(pass.length > 11)||(pass.length < 6)){
    document.getElementById('pass_wrong').innerHTML = "Password should between 6 and 10 charecters";
      return false;
    }
  else {
      document.getElementById('pass_wrong').innerHTML = "";
        return false;
    }
}

function emailinfo() {
  var emails = document.getElementById('email').value;

  if((emails.indexOf('@') <= 0)||(emails.charAt(emails.length-4)!='.')&&(emails.charAt(email.length-3)!='.')){
    document.getElementById('email_wrong').innerHTML="Invalid Email,Try again";
  }
  else{
    document.getElementById('email_wrong').innerHTML="";
  }
}

function re_password() {
  var re_passentry = document.getElementById('re_pass').value;
  var pass = document.getElementById('pass').value;

  if(re_passentry != pass){
    document.getElementById('pass_notMatch').innerHTML="Password doesn't Match"
  }
  else {
    document.getElementById('pass_notMatch').innerHTML="";
  }
}
