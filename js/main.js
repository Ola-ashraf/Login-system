let userNameInput =document.querySelector("#userNameInput");
let emailInput =document.querySelector("#emailInput");
let passwordInput =document.querySelector("#passwordInput");
let signUpBtn =document.querySelector("#signUpBtn");
let alertMassage =document.querySelector("#alertMassage");
let loginBtn =document.querySelector("#loginBtn");
let welcomeMassage =document.querySelector("#welcomeMassage");
let logOutBtn =document.querySelector("#logOutBtn")
let userContainer=[];


if(localStorage.getItem('Users')!=null)
{
    userContainer=JSON.parse(localStorage.getItem('Users'));
}
if(signUpBtn != null)
{
    signUpBtn.addEventListener('click',signUp);
}
if(loginBtn != null)
{
    loginBtn.addEventListener('click',logIn);
}
if(logOutBtn != null)
{
    logOutBtn.addEventListener('click',logOut);
}
if(welcomeMassage != null)
{
    let user=JSON.parse(localStorage.getItem('userName'));
    welcomeMassage.innerHTML ='welocme  '+user;
}

function signUp()
{
    let user={
        Name:userNameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    if(userNameInput=='' ||emailInput.value==''||passwordInput.value==''||checkEmailExist() !=-1 )
    {
        if(userNameInput=='' ||emailInput.value==''||passwordInput.value=='')
        {
            getAlertMessage('All inputs required','red');
        }
        if(checkEmailExist() !=-1)
        {
            getAlertMessage('email is already exist','red');
        }
    }
    else
    {
        getAlertMessage('Success','green');
        userContainer.push(user);
        localStorage.setItem('Users',JSON.stringify(userContainer));
    }  
}
function getAlertMessage(str,color){
    alertMassage.innerHTML=str;
    alertMassage.classList.replace('d-none','d-block');
    alertMassage.style.color=color;   
}

function checkEmailExist(){
   let res=  userContainer.findIndex(ele=>ele.email==emailInput.value);
   return res;
}

function logIn(){
    if(emailInput.value=='' || passwordInput.value=='')
    {
        getAlertMessage('All inputs required','red')
    }
    else
    {
        let res= userContainer.find(ele=> ele.email==emailInput.value && ele.password==passwordInput.value);
        if(res == undefined)
        {
          getAlertMessage('Email or password not correct','red'); 
        }
        else
        {
          localStorage.setItem('userName',JSON.stringify(res.Name));
          window.location.href='home.html'
      
        }
    }
}

function logOut(){ 
    window.location.href='index.html'
}