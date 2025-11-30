 var web_page = window.location.pathname;
console.log(web_page); 

if(web_page.includes("soccer.html"))
{
     const teamData = [
        ["Arsenal", "../images/soccer_logos/arsenal.png"],
        ["Barcelona", "../images/soccer_logos/barcelona.png"],
        ["Liverpool", "../images/soccer_logos/liverpool.png"],
        ["Madrid", "../images/soccer_logos/madrid.png"],
        ["Manchester", "../images/soccer_logos/manchester.png"],
        ["Milan", "../images/soccer_logos/milan.png"]
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
        ["Chicago Bears", "../images/football_logos/bears.png"],
        ["Buffalo Bills", "../images/football_logos/bills.png"],
        ["Arizona Cardinals", "../images/football_logos/cardinals.png"],
        ["Carolina Panthers", "../images/football_logos/panthers.png"],
        ["Atlanta Falcons", "../images/football_logos/falcons.png"],
        ["Baltimore Ravens", "../images/football_logos/ravens.png"]
       
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
        ["Chicago BlackHawks", "../images/hockey_logos/blackhawks.png"],
        ["Anaheim Ducks", "../images/hockey_logos/ducks.png"],
        ["Calgary Flames", "../images/hockey_logos/flames.png"],
        ["Vegas Golden Knights", "../images/hockey_logos/golden_knights.png"],
        ["Minnesota Wild", "../images/hockey_logos/wild.png"],
        ["Edmonton Oilers", "../images/hockey_logos/oilers.png"]

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
