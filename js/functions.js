function randomDice(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function uhdRefresh() {
    console.log("refresh UHD");
    uhdPjHability.textContent = pjHability;
    uhdPjEndurance.textContent = pjEndurance;
    uhdPjLuck.textContent = pjLuck;
    uhdPnjHability.textContent = monsterAttackBase;
    uhdPnjEndurance.textContent = monsterPV;
}

function uhdMessage(message) {
    uhdConsole.textContent = message;
}
function PJattack(damage) {
    monsterPV -= damage;
    uhdRefresh();
}
function PNJattack(damage) {
    pjEndurance -= damage;
    uhdRefresh();
}
function monsterPVBonus(bonus) {
    monsterPV += bonus;
    uhdRefresh();
}
function luckCounter(operator, amount) {
    console.log("utiliser Chance");
    if (operator == "+") {
        pjLuck = pjLuck + amount;
    } else if (operator == "-") {
        pjLuck = pjLuck - amount;
    } else {
        console.log("operator error")
    };
    console.log(pjLuck);
    uhdRefresh();
}

function clearCombat() {
    console.log("clear Fight infos");
    uhdPnjName.textContent = "";
    uhdPnjHability.textContent = "";
    uhdPnjEndurance.textContent = "";
    uhdConsole.textContent = "";
}

function luck() {
    if (pjLuck >= 1) {
        let luckResult = randomDice(6) + randomDice(6);
        if (luckResult <= pjLuck) {
            luckstate = 1;
            uhdMessage("⭐Chanceux!⭐");
        } else if (luckResult > pjLuck) {
            luckstate = 0;
            uhdMessage("🎲 Pas de Chance 🎲");
            if (inCombat == "on") {
                monsterPVBonus(1);
            }
        }
        luckCounter("-", 1);
        console.log(luckstate);
    } else {
        uhdMessage("Vous n'avez plus de points de chance disponibles!⭐");
    }
}

function makePj() {
    pjHability = randomDice(6) + 6;
    pjEndurance = randomDice(6) + randomDice(6) + 12;
    pjLuck = randomDice(6) + 6;
    console.log("PJ Created");
    uhdRefresh();
}

function generateCombat(monsterName, monsterHability, monsterEndurance) {
    inCombat = "on";
    clearCombat();
    monsterAttackBase = monsterHability;
    monsterPV = monsterEndurance;
    uhdPnjName.textContent = monsterName;
    uhdMessage(`👾Un ${monsterName} sauvage apparait !👾`)
    uhdRefresh();
}

function attack() {
    console.log(`luckstate : ${luckstate} `)
    if (inCombat == "on") {
        let monsterAttack = monsterAttackBase + randomDice(6) + randomDice(6);
        let pjAttack = pjHability + randomDice(6) + randomDice(6);
        console.log(`${pjAttack}VS ${monsterAttack}`);
        if (pjAttack > monsterAttack) {
            if (luckstate == 0 || luckstate == null) {
                console.log(`luckstate : ${luckstate} `)
                PJattack(2);
            }
            else if (luckstate = 1) {
                PJattack(4);
            }
            if (monsterPV <= 0) {
                inCombat = "off";
                uhdMessage("⭐Vous avez vaincu la créature⭐");
            } else {
                uhdMessage("🗡️vous blessez la créature🗡️");
            }
        } else if (pjAttack < monsterAttack) {
            PNJattack(2);
            if (pjEndurance <= 0) {
                uhdMessage("⚰️Vous êtes MORT⚰️");
            } else {
                uhdMessage("💔La Créature vous blesse💔");
            }
        } else if (pjAttack == monsterAttack) {
            uhdMessage("🛡️Esquivé🛡️");
        }
    } else if (inCombat == "off") {
        uhdMessage("🤷Il n'y a rien à combatre ici à part des cailloux...🤷");
    }
}

function runaway(allowed) {
    if (inCombat == "on") {
        if (allowed == "possible") {
            pjEndurance = pjEndurance - 2;
            uhdRefresh();
            if (pjEndurance <= 0) {
                uhdConsole.textContent = "⚰️La créature vous attaque par derrière et vous inflige un coup de grâce.RIP⚰️";
            } else {
                clearCombat();
                inCombat = "off";
                uhdConsole.textContent = "💔Vous avez réussi à fuir mais la créature vous blesse💔";
            }
        } else {
            uhdConsole.textContent = "FUITE IMPOSSIBLE"
        }
    } else if (inCombat == "off") {
        uhdConsole.textContent = "🤷Il n'y a rien à fuir ici à part votre ombre...🤷"
    }
}
