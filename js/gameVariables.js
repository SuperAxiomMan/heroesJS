/* PJ Variables */
let pjHability = 0;
let pjEndurance = 0;
let pjLuck = 0;
let luckstate = null;

/* PNJ Variables */
let monsterPV = 0;
let monsterAttackBase = 0;

/* Gameplay Variables */
let inCombat = "off";


/* DOM Selectors */
//buttons
const fightEncounter = document.getElementById("fightEncounter");
const fightButton = document.getElementById("actionFight");
const runawayButton = document.getElementById("actionRunaway");
const luckButton = document.getElementById("actionLuck");
//UHD PJ
const uhdPjHability = document.querySelector(".pjHability span");
const uhdPjEndurance = document.querySelector(".pjEndurance span");
const uhdPjLuck = document.querySelector(".pjLuck span");
//UHD PNJ
const uhdPnjName = document.querySelector(".monsterName");
const uhdPnjHability = document.querySelector(".monsterHability span");
const uhdPnjEndurance = document.querySelector(".monsterEndurance span");
//Console Message
const uhdConsole = document.querySelector(".console p");