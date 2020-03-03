function login()
{  
   var usname=document.myform.username.value;
   var psword=document.myform.pword.value;
   if(usname =="hello" && psword =="hello")
   {
       window.open("success.html");
   }
   else{
        alert("invalid");
   }






}
