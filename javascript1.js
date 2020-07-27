document.getElementById("btn1").addEventListener("click",function()
    {
        document.getElementById("content").style.display="block";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn2").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="block";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn3").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="block";
    })
    
          var list1=[];
          var list2=[];
          var list3=[];
          var list4=[];
          var list5=[];
          var list6=[];
          var list7=[];
          var list8=[];
          var list9=[];
          
          var n=1;
          var x=0;
          
          function checkEmail(str1)
          {
               var posat=str1.indexOf("@");
               var posdot=str1.indexOf(".");
          
          if(posat!=-1 && posdot!=-1)
          {
              if(posat>=1 && (posdot-posat)>=2 && (str1.length-1-posdot)>=2 && (str1.length-1-posdot)<=5)
              {
                  return true;
              }
              else
              {
                  return false;
              }
          }
          else
          {
              return false;
          }
          }
          const validateForm = (ev) =>{
               ev.preventDefault();
               var nam=document.myform.name.value;
               var email2=document.myform.email.value;
               var mobnum=document.myform.mnum.value;
               var age2=document.myform.age.value;
               var gen2=document.myform.gender.value;
               var dan2=document.myform.type.value;
               var nom2=document.myform.nom.value;
               var dtype2=document.myform.dtype.value;
               var comment2=document.myform.comment.value;
               var agree2=document.myform.agree.checked;
               if (nam=="" || nam==null)
               {
                  document.getElementById("nam1").innerHTML="Name should not be null";
                  
               }
               else if(nam.length<3)
               {
                  document.getElementById("nam1").innerHTML="Name length should be 3-30";
                  
               }
               else if(nam.length>30)
               {
                  document.getElementById("nam1").innerHTML="Name length should be 3-30";
                  
               }
               else if(isNaN(nam)==false)
               {
                  document.getElementById("nam1").innerHTML="Name should not be a numeric";
                  
               }
               else if(email2=="" || email2==null)
               {
                  document.getElementById("emal").innerHTML="Email cannot be empty";
                  
               }
               else if(!checkEmail(email2))
               {
                  document.getElementById("emal").innerHTML="Email not valid";
                  
               }
               else if (mobnum=="" || mobnum==null)
               {
                  document.getElementById("mno").innerHTML="Mobile no cannot be null";
                  
               }
               else if(mobnum.length!=10)
               {
                  document.getElementById("mno").innerHTML="Please enter a 10 digit no";
                  
               }
               else if(mobnum[0]<'6')
               {
                  document.getElementById("mno").innerHTML="Enter a valid mobile no";
                  
               }
               else if(age2=="" || age2==null)
               {
                  document.getElementById("age1").innerHTML="Age cannot be null";
                  
               }
               else if(age2<=10)
               {
                  document.getElementById("age1").innerHTML="Age should be 10-50";
                  
               }
               else if(age2>=50)
               {
                  document.getElementById("age1").innerHTML="Age should be 10-50";
                  
               }
               else if(gen2=="" || gen2==null)
               {
               document.getElementById("gen1").innerHTML="Select one of them";
               
               }
               else if(dan2=="" || dan2==null)
               {
                  document.getElementById("dan1").innerHTML="Select one of them";
               
               }
               else if(nom2>=14)
               {
                  document.getElementById("nom1").innerHTML="Members should be 1-14";
                 
               }
               else if(dtype2=="" || dtype2==null)
               {
                  document.getElementById("dtype1").innerHTML="Select one of them";
               
               }
               else if(comment2.length>220)
               {
                  document.getElementById("comment1").innerHTML="comment cannot be greater than 220 characters";
                  
               }
               else if(agree2==false)
               {
                 document.getElementById("agree1").innerHTML="Please accept terms and conditions";
               }
               else
               {
                  
                  var AddRown=document.getElementById('show');
                  var NewRow=AddRown.insertRow(n);
                  
                  list1[x]=document.myform.name.value;
                  list2[x]=document.myform.email.value;
                  list3[x]=document.myform.mnum.value;
                  list4[x]=document.myform.age.value;
                  list5[x]=document.myform.gender.value;
                  list6[x]=document.myform.type.value;
                  list7[x]=document.myform.nom.value;
                  list8[x]=document.myform.dtype.value;
                  list9[x]=document.myform.comment.value;
                  list10[x]= new Date();
                  
                  var cel1=NewRow.insertCell(0);
                  var cel2=NewRow.insertCell(1);
                  var cel3=NewRow.insertCell(2);
                  var cel4=NewRow.insertCell(3);
                  var cel5=NewRow.insertCell(4);
                  var cel6=NewRow.insertCell(5);
                  var cel7=NewRow.insertCell(6);
                  var cel8=NewRow.insertCell(7);
                  var cel9=NewRow.insertCell(8);
                  var cel10=NewRow.insertCell(9);
                  
                  cel1.innerHTML=list1[x];
                  cel2.innerHTML=list2[x];
                  cel3.innerHTML=list3[x];
                  cel4.innerHTML=list4[x];
                  cel5.innerHTML=list5[x];
                  cel6.innerHTML=list6[x];
                  cel7.innerHTML=list7[x];
                  cel8.innerHTML=list8[x];
                  cel9.innerHTML=list9[x];
                  cel10.innerHTML=list10[x];
                  
                  n++;
                  x++;
                 
                  alert("successfully registered");
                  document.querySelector("form").reset();
                  document.getElementById("nam1").style.display="none";
                  document.getElementById("emal").style.display="none";
                  document.getElementById("mno").style.display="none";
                  document.getElementById("age1").style.display="none";
                  document.getElementById("gen1").style.display="none";
                  document.getElementById("dan1").style.display="none";
                  document.getElementById("nom1").style.display="none";
                  document.getElementById("dtype1").style.display="none";
                  document.getElementById("comment1").style.display="none";
                  document.getElementById("agree1").style.display="none";
               }
          }
          document.addEventListener("DOMContentLoaded", ()=>{
              document.getElementById("btna").addEventListener("click", validateForm);
          });
