// ===== Passwort =====
const PASSWORD = "MLM";

function login() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === PASSWORD) {
        document.getElementById("login").style.display = "none";
        document.getElementById("app").style.display = "block";
        updateCountdown();
        setInterval(updateCountdown, 1000);
        showPage("home");
    } else {
        error.textContent = "❌ Falsches Passwort";
    }
}

// Enter-Taste zum Anmelden
document.addEventListener("keydown", function(e){
    if(e.key === "Enter" &&
       document.getElementById("login").style.display !== "none"){
        login();
    }
});

// ===== Countdown =====
const targetDate = new Date("2026-07-17T00:00:00").getTime();

function updateCountdown() {

    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
        "❤️ Sie ist zurück! ❤️";
        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60))/(1000*60));
    const seconds = Math.floor((diff % (1000*60))/1000);

    document.getElementById("countdown").innerHTML =
    `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;
}

// ===== Navigation =====
function showPage(id){

    document.querySelectorAll("main section").forEach(section=>{
        section.style.display="none";
    });

    document.getElementById(id).style.display="block";
}

// ===== XP =====
let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;

document.getElementById("xp").textContent = xp;
document.getElementById("level").textContent = level;

function addXP(amount){

    xp += amount;

    while(xp >= level*100){
        xp -= level*100;
        level++;
        alert("🎉 Level "+level+" erreicht!");
    }

    localStorage.setItem("xp",xp);
    localStorage.setItem("level",level);

    document.getElementById("xp").textContent=xp;
    document.getElementById("level").textContent=level;
}
