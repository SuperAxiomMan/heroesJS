fightEncounter.addEventListener("click", function() {
    console.log();
    generateCombat('Lutin', 10, 6);
  });
  fightButton.addEventListener("click", function() {
    attack();
  });
  runawayButton.addEventListener("click", function() {
    runaway("possible");
  });
  luckButton.addEventListener("click", function() {
    luck();
  });