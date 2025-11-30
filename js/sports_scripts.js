 var web_page = window.location.pathname;
console.log(web_page); 

if(web_page.includes("soccer.html"))
{
     const teamData = [
        ["Arsenal", "./images/arsenal.png"],
        ["Barcelona", "./images/barcelona.png"],
        ["Liverpool", "./images/liverpool.png"],
        ["Madrid", "./images/madrid.png"],
        ["Milan", "./images/milan.png"]

    ];

    // Load teams dynamically
    const grid = document.getElementById("teams");
    teamData.forEach(team => {
        const div = document.createElement("div");
        div.className = "team";
        div.innerHTML = `
            <div>${team[0]}</div>
            <img src="${team[1]}" alt="${team[0]} logo">
        `;
        grid.appendChild(div);
    });

    function makeMatch() {
        let t1 = teamData[Math.floor(Math.random() * teamData.length)];
        let t2 = teamData[Math.floor(Math.random() * teamData.length)];

        while (t1[0] === t2[0]) {
            t2 = teamData[Math.floor(Math.random() * teamData.length)];
        }

        document.getElementById("result").innerHTML = `
            <div class="fixture-box">
                <img class="fixture-logo" src="${t1[1]}"><br>
                ${t1[0]} <br><br> VS <br><br>
                <img class="fixture-logo" src="${t2[1]}"><br>
                ${t2[0]}
            </div>
        `;
    }
}
 
if(web_page.includes("football.html"))
{
    const teamData = [
        ["Arizona Cardinals", "https://loodibee.com/wp-content/uploads/nfl-arizona-cardinals-logo.png"],
        ["Atlanta Falcons", "https://loodibee.com/wp-content/uploads/nfl-atlanta-falcons-logo.png"],
        ["Baltimore Ravens", "https://loodibee.com/wp-content/uploads/nfl-baltimore-ravens-logo.png"],
        ["Buffalo Bills", "https://loodibee.com/wp-content/uploads/nfl-buffalo-bills-logo.png"],
        ["Carolina Panthers", "https://loodibee.com/wp-content/uploads/nfl-carolina-panthers-logo.png"]
       
    ];

    // Load all teams into grid
    const grid = document.getElementById("teams");
    teamData.forEach(team => {
        const div = document.createElement("div");
        div.className = "team";
        div.innerHTML = `
            <div>${team[0]}</div>
            <img src="${team[1]}" alt="${team[0]} logo">
        `;
        grid.appendChild(div);
    });

    function makeMatch() {
        let t1 = teamData[Math.floor(Math.random() * teamData.length)];
        let t2 = teamData[Math.floor(Math.random() * teamData.length)];

        while (t1[0] === t2[0]) {
            t2 = teamData[Math.floor(Math.random() * teamData.length)];
        }

        document.getElementById("result").innerHTML = `
            <div class="fixture-box">
                <img class="fixture-logo" src="${t1[1]}"><br>
                ${t1[0]} <br><br> VS <br><br>
                <img class="fixture-logo" src="${t2[1]}"><br>
                ${t2[0]}
            </div>
        `;
    }
}

if(web_page.includes("hockey.html"))
{
     const teamData = [
        ["Edmonton Oilers", "https://loodibee.com/wp-content/uploads/premier-league-arsenal-fc-logo.png"],
        ["Calgary Flames", "https://loodibee.com/wp-content/uploads/premier-league-aston-villa-logo.png"],
        ["Florida Panther", "https://loodibee.com/wp-content/uploads/premier-league-afc-bournemouth-logo.png"],
        ["Vancouver Canucks", "https://loodibee.com/wp-content/uploads/premier-league-brentford-fc-logo.png"],
        ["Boston Bruins", "https://loodibee.com/wp-content/uploads/premier-league-brighton-hove-albion-logo.png"]

    ];

    // Load teams dynamically
    const grid = document.getElementById("teams");
    teamData.forEach(team => {
        const div = document.createElement("div");
        div.className = "team";
        div.innerHTML = `
            <div>${team[0]}</div>
            <img src="${team[1]}" alt="${team[0]} logo">
        `;
        grid.appendChild(div);
    });

    function makeMatch() {
        let t1 = teamData[Math.floor(Math.random() * teamData.length)];
        let t2 = teamData[Math.floor(Math.random() * teamData.length)];

        while (t1[0] === t2[0]) {
            t2 = teamData[Math.floor(Math.random() * teamData.length)];
        }

        document.getElementById("result").innerHTML = `
            <div class="fixture-box">
                <img class="fixture-logo" src="${t1[1]}"><br>
                ${t1[0]} <br><br> VS <br><br>
                <img class="fixture-logo" src="${t2[1]}"><br>
                ${t2[0]}
            </div>
        `;
    }
}
