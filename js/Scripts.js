




    






































//Array of Accounts
var account_array = [];

//Get web page to determine functionality
var web_page = window.location.pathname;
console.log(web_page); 

/* ---UNCOMMENT IF YOU WANT TO CLEAR ARRAY OF ACCOUNTS ---*/ 
//localestorage.clear();

/*-------SPORTS.HTML SCRIPTS-----*/
if(web_page.includes("sport")) //TODO: Check if this still works  //change to index.html for final release
{
    setInterval(checkSchedule, 1000);
    var game_list = document.getElementById("team-schedule");
    var game = game_list.getElementsByTagName("li");

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
} 


/*-------INDEX.HTML SCRIPTS-----*/
if(web_page.includes("index.html"))
{   
    //anything that needs to be called on load goes here
    window.onload = function()
    {
    document.getElementById('clock').innerHTML = new Date().toLocaleString();
    updateClock();

    
    
    }

    //Sign in/up variable to hide and display when needed
    var sign_in = document.getElementById("sign-in"); //change these to match index page
    var sign_out = document.getElementById("sign-out");
    var sign_up = document.getElementById("sign-up");
    var seperator = document.getElementById("seperator");

    var my_username = document.getElementById("username");
    var my_email = document.getElementById("email");

    var check_signed_in = 0;
    check_signed_in = JSON.parse(localStorage.getItem("is_signed_in")); //Check the local storage to see if user has signed in yet
    //Check if user was signed in last
    if(check_signed_in === 1)//change to index.html for final release
    {
        setUser();
        sign_out.style.visibility = "visible"; 
        sign_in.style.visibility = "hidden";
        sign_up.style.visibility = "hidden";
        seperator.style.visibility = "hidden";
    } 
    else
    {
        sign_out.style.visibility = "hidden";
        sign_in.style.visibility = "visible";
        sign_up.style.visibility = "visible";
        seperator.style.visibility = "visible";
    }
        



    //Set username and email and display on index page
    function setUser()
    {
        let user_account = JSON.parse(localStorage.getItem("user_account"));

        my_username.innerHTML = "Username: " + user_account.username;
        my_email.innerHTML = "Email: " + user_account.email;

    }

    //Sign Out
    function signOut()
    {
        localStorage.removeItem("is_signed_in"); //Needed to remove so that the information doesnt display on startup even if we sign out and so no user data is lost

        sign_in.style.visibility = "visible";//Display sign in input again
        sign_up.style.visibility = "visible";//Display sign up input again
        seperator.style.visibility = "visible";
        sign_out.style.visibility = "hidden";

        let my_username = document.getElementById("username");
        let my_email = document.getElementById("email");

        my_username.innerHTML = "";
        my_email.innerHTML = "";
    }

    //---Clock--
    setInterval(updateClock, 1000);
    function updateClock()
    {
        let date = new Date();
        let clock = document.getElementById("clock");

        let date_string = date.toLocaleDateString();
        let time_string = date.toLocaleTimeString();

    clock.innerHTML = date_string + " " + time_string;
    }

    

    
}


/*-------SIGN_IN.HTML SCRIPTS-----*/
if(web_page.includes("sign_in.html"))
{   
    //anything that needs to be called on load goes here
    window.onload = function()
    {
    
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
    
}

/*-------CREATE_ACCOUNT.HTML SCRIPTS-----*/
if(web_page.includes("create_account.html"))
{   
    //anything that needs to be called on load goes here
    window.onload = function()
    {
        
    }

    function createAccount()
    {
        let new_username = document.getElementById("create-username");
        let new_email = document.getElementById("create-email");
        let new_password = document.getElementById("create-password");
        let conf_password = document.getElementById("conf-password");

        //Check if account with same username of email exists already
        
        account_array = JSON.parse(localStorage.getItem("stored_accounts"));
        for(let i = 0; i < account_array.length; i++)
        {
            if(account_array[i].username == new_username.value)
            {
                alert("The username you entered already exist, try a different username");
                return;
            }
            else if (account_array[i].email == new_email.value)
            {
                alert("An account with that email already exist, try using a different email");
                return;
            }

        }


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
    
}



