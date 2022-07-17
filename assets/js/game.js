// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;

// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(enemyName);
// console.log(enemyName.length)

    var fight = function (enemyName) {
    // alert player that they are starting the round
    //window.alert("Welcome to Robot Gladiators!")
        // provide player the choice to fight vs skip
        while(enemyHealth>0&&playerHealth>0) {
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'  to choose.");
            
          
            // if player choses to skip
            if (promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
                // if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    // subtract money from playerMoney for skipping
                    playerMoney = playerMoney - 10;
                    console.log("playerMoney", playerMoney);
                    break;
                  }
                // if no (false), ask question again by running fight() again
                }
                
                // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );
              
                // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                
                // award player money for winning
                playerMoney=playerMoney + 20;
                break;
                }

            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
            
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                // leave while() loop if player is dead
                break;
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } //end while loop
    }; // end promptFight function

    var startGame = function() {
        var playerHealth = 100;
        var playerAttack = 25;
        var playerMoney = 10;

        for (var i = 0; i < enemyName.length; i++) {
          if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyName[i];
            enemyHealth = 50;
            fight(pickedEnemyName);

            // if we're not at the last enemy in the arry
            if (playerHealth > 0 && i<enemyName.length -1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm ("The fight is over, visit the store before the next round?");
                // if yes, take them to the store () function
                if (storeConfirm){
                    shop();
                }
            }
          }
          else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
          }
        }
        endGame();
      };


    var endGame = function() {
    // if player is still alive, player wins!
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        } 
        else {
            window.alert("You've lost your robot in battle.");
        }
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
        // restart the game
        startGame();
        } 
        else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    }
    // ask player if they'd like to play again
    var shop= function () {
        // ask player what they'd like to do
        var shopOptionPrompt = window.prompt (
            "Would you like to REFIL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        )

        switch (shopOptionPrompt){
            case "refill":
            case "REFILL":
                if (playerMoney>=7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");
                    // increase health and decrease money
                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }
                break;
            case "upgrade":
            case "UPGRADE":
                if (playerMoney>=7) {
                    window.alert("Upgrading player's attch by 6 for 7 dollars.");
                    // increase attack and decrease money 
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You don't have enough money.");
                }
                break;
            case "leave":
            case "LEAVE":
                window.alert("Leaving the store.");
                // do nothing, so function will end
                break;
            default:
                window.alert("You did not pick a valid option. Try again.")
                // call shop() again to force player to pick a valid option
                shop();
                break;
        }
    };

    startGame();
