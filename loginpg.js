function login()
{  
   var usname=document.getElementById("username");
   var psword=document.getElementById("password");
   if(usname.value =="hello" && psword.value =="hello")
   {
       window.open("success.html");
   }
   else{
        alert("invalid");
   }






}
