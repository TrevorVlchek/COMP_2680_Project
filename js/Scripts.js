
var web_page = window.location.pathname;
console.log(web_page);

//---Clock--
function updateClock()
{
   let date = new Date();
   let clock = document.getElementById("clock");

   let date_string = date.toLocaleDateString();
   let time_string = date.toLocaleTimeString();

   clock.innerHTML = date_string + " " + time_string;
}
if(web_page.includes("template.html")) //change to index.html for final release
    updateClock();

if(web_page.includes("template.html")) //change to index.html for final release
    setInterval(updateClock, 1000);


//---Alert When Game Starts---
function checkSchedule()
{
    for(var i = 0; i < game.length; i++)
    {
        
        let date = new Date();
        let date_string = date.toLocaleDateString() + " " + date.toLocaleTimeString(); //Set date to locale string so list date and real time date and of same type and format
        
        let checkbox = document.getElementById("check-game"+(i+1)); //Get checkbox value 

        if (date_string == game[i].textContent && checkbox.checked == true) //Alert user if they checked the box and display game details
        {
            let game_details = document.getElementById("game"+(i+1)+"-details");
            console.log("Details are = " + game_details.textContent);
            alert(game_details.textContent + " is starting soon!");
        }
        
    }

}

if(web_page.includes("template.html")) //TODO: Check if this still works  //change to index.html for final release
{
    setInterval(checkSchedule, 1000);
    var game_list = document.getElementById("team-schedule");
    var game = game_list.getElementsByTagName("li");
} 


//--CREATE/SIGN-IN SECTIOn--

//Sign In
function signIn()
{
    window.open("sign_in.html", "_blank"); //Open new sign_in page
}

//Sign Out
function signOut()
{
    localStorage.removeItem("is_signed_in"); //Needed to remove so that the information doesnt display on startup even if we sign out and so no user data is lost

    sign_in.style.visibility = "visible";//Display sign in input again
    sign_out.style.visibility = "hidden";

    let my_username = document.getElementById("my-username");
    let my_email = document.getElementById("my-email");
    let my_password = document.getElementById("my-password");

    my_username.innerHTML = "";
    my_email.innerHTML = "";
    my_password.innerHTML = "";
}




function submitUser()
{
    let sign_username = document.getElementById("sign-username");
    let sign_email = document.getElementById("sign-email");
    let sign_password = document.getElementById("sign-password");

    //Check if user has created account yet by checking if they is anything in local storage
    if(localStorage.length > 0) 
    {
        account_array = JSON.parse(localStorage.getItem("stored_accounts"));
        for(let i = 0; i < account_array.length; i++)
        {
            if(account_array[i].username != sign_username.value)
            {
                alert("The username you entered does not exist");
            }
            else if(account_array[i].email != sign_email.value)
            {
                alert("An account with this email does not exist");
            }
            else if(account_array[i].password != sign_password.value)
            {
                alert("The password you entered is incorrect");
            }
            else
            {
                
                
                alert("You have successfully logged in, return to home page and refresh");
                let is_signed_in = 1;
                localStorage.setItem("user_account", JSON.stringify(account_array[i]));
                localStorage.setItem("is_signed_in", JSON.stringify(is_signed_in));

                

            }
        }
    }
    else
        alert("There is no account created yet");
        

}



//Create Account
function accountPage()
{
    window.open("create_account.html", "_blank");
}

function createAccount()
{
    let new_username = document.getElementById("create-username");
    let new_email = document.getElementById("create-email");
    let new_password = document.getElementById("create-password");
    let conf_password = document.getElementById("conf-password");

    if(new_username.value == "")
        alert("Enter a valid username");
    else if(new_password.value == "")
        alert("Enter a valid password");
    else if(new_email.value == "")
        alert("Enter a vlid email");
    else if (new_password.value != conf_password.value)
        alert("Please enter the same password");
    else
    {
        let account = 
        {
            username: new_username.value,
            email: new_email.value,
            password: new_password.value
        };

        account_array.push(account);
        console.log(account);
        localStorage.setItem("stored_accounts", JSON.stringify(account_array));

        alert("Account has been created return to sign in page");
        

    }
    
    
    
}

//Set UserName in template/index page
function setUser()
{
    let user_account = JSON.parse(localStorage.getItem("user_account"));

    let my_username = document.getElementById("my-username");
    let my_email = document.getElementById("my-email");
    let my_password = document.getElementById("my-password");

    my_username.innerHTML = "Username: " + user_account.username;
    my_email.innerHTML = "Email: " + user_account.email;
    my_password.innerHTML = "Password: " + user_account.password;


}

//Variables
var check_signed_in = 0;
check_signed_in = JSON.parse(localStorage.getItem("is_signed_in")); //Check the local storage to see if user has signed in yet

//Array of Accounts
var account_array = [];

var sign_in = document.getElementById("sign-in"); 
var sign_out = document.getElementById("sign-out");
sign_out.style.visibility = "hidden"; //set default visibility to hidden

if(web_page.includes("template.html") && check_signed_in === 1)//change to index.html for final release
{
    setUser();
    sign_out.style.visibility = "visible"; 
    sign_in.style.visibility = "hidden";
} 
else if(web_page.includes("template.html") && check_signed_in == 0) //Edge case 
    sign_in.style.visibility = "visible";
