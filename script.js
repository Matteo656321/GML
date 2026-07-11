// =======================
// 🔒 PASSWORT
// =======================

const PASSWORD = "MLM";

function login() {

    let input = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (input === PASSWORD) {

        document.getElementById("login").style.display = "none";
        document.getElementById("app").style.display = "block";

        showPage("home");

        updateCountdown();
        setInterval(updateCountdown, 1000);

    } else {

        error.innerHTML = "❌ Falsches Passwort";

    }
}



// =======================
// ⏳ COUNTDOWN
// =======================

const zielDatum = new Date("2026-07-17T00:00:00").getTime();


function updateCountdown(){

    let jetzt = new Date().getTime();

    let abstand = zielDatum - jetzt;


    if(abstand <= 0){

        document.getElementById("countdown").innerHTML =
        "❤️ Sie ist zurück!";

        return;
    }


    let tage = Math.floor(abstand / (1000*60*60*24));

    let stunden = Math.floor(
        (abstand % (1000*60*60*24)) /
        (1000*60*60)
    );


    let minuten = Math.floor(
        (abstand % (1000*60*60)) /
        (1000*60)
    );


    let sekunden = Math.floor(
        (abstand % (1000*60)) /
        1000
    );


    document.getElementById("countdown").innerHTML =
    tage + " Tage " +
    stunden + " Stunden " +
    minuten + " Minuten " +
    sekunden + " Sekunden";

}



// =======================
// 📑 SEITEN WECHSEL
// =======================

function showPage(page){


    let sections = document.querySelectorAll("main section");


    sections.forEach(section=>{

        section.style.display="none";

    });


    document.getElementById(page).style.display="block";

}



// =======================
// ⭐ XP SYSTEM
// =======================


let xp = Number(localStorage.getItem("xp")) || 0;

let level = Number(localStorage.getItem("level")) || 1;



function loadXP(){

    document.getElementById("xp").innerHTML=xp;

    document.getElementById("level").innerHTML=level;

}


loadXP();



function addXP(menge){


    xp += menge;


    if(xp >= level*100){

        xp = 0;

        level++;

        alert(
        "🎉 Level " + level + " erreicht!"
        );

    }


    localStorage.setItem("xp",xp);

    localStorage.setItem("level",level);


    loadXP();

}



// =======================
// 🎁 TEST BONUS
// =======================


function surprise(){

    addXP(10);

    alert(
    "🎁 Überraschung! +10 XP"
    );

}


// =======================
// ENTER TASTE LOGIN
// =======================


document.addEventListener(
"keydown",
function(event){

    if(event.key === "Enter"){

        login();

    }

});
