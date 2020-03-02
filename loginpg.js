function login()
{  
   var username=document.myform.username.value;
   var psword=document.myform.pword.value;
   if(username =="hello" && psword =="hello")
   {
       window.open("success.html");
   }
   else{
        alert("invalid");
   }






}