// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - player robot's health is zero or less


// you can also log multiple values at once like this


// console.log(enemyName);
// console.log(enemyName.length)
var randomNumber = function () {
    var value = Math.floor(Math.random()*21) + 40;
    return value;
}
    var fight = function (enemy) {
        // console.log(enemy);
    // alert player that they are starting the round
    //window.alert("Welcome to Robot Gladiators!")
        // provide player the choice to fight vs skip
        while(enemy.health>0&&playerInfo.health>0) {
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'  to choose.");
            
          
            // if player choses to skip
            if (promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
                // if yes (true), leave fight
                if (confirmSkip) {
                    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                    // subtract money from playerMoney for skipping
                    playerInfo.money = Math.max(0, playerInfo.money - 10);
                    console.log("playerMoney", playerInfo.money);
                    break;
                  }
                // if no (false), ask question again by running fight() again
                }
                
                // remove enemy's health by subtracting the amount set in the playerAttack variable
                var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

                enemy.health = Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
                );
              
                // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                
                // award player money for winning
                playerInfo.money=playerInfo.money + 20;
                break;
                }

            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }
            
            // remove player's health by subtracting the amount set in the enemyAttack variable
            var damage = randomNumber(enemy.attack-3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        
            // check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                // leave while() loop if player is dead
                break;
            } 
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        } //end while loop
    }; // end promptFight function

    var startGame = function() {
    //    reset player stats
        playerInfo.reset();

        for (var i = 0; i < enemyInfo.length; i++) {
          if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            // if we're not at the last enemy in the arry
            if (playerInfo.health > 0 && i<enemyInfo.length -1) {
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
        if (playerInfo.health > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
                playerInfo.refillHealth()
                break;
            case "upgrade":
            case "UPGRADE":
                playerInfo.upgradeAttack()
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
    var randomNumber = function (min, max) {
        var value = Math.floor(Math.random()*(max - min +1)) + min;
        return value;
    }
    var enemyInfo = [
        {name: "Roberto", attack: randomNumber(10,14)},
        {name: "Amy Android", attack: randomNumber(10,14)},
        {name: "Robo Trumble", attack: randomNumber(10,14)}
    ];

    var getPlayerName = function () {
        var name = "";
        while (name === "" || name === null) {
            name = prompt("what is your robot's name?");
        }
        console.log("your robot name is " + name)
        return name;
    }
    var playerInfo = {
        name: getPlayerName(),
        health: 100,
        attack: 10,
        money: 10,
        reset: function () {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        },
        refillHealth: function() {
            if (this.money >=7) {
                this.health += 20;
                this.money -=7;
            }
            else {
                window.alert("You don't have enough money!");
            }
        },
        upgradeAttack: function() {
            if (this.money >=7) {
                this.attack +=6;
                this.money -=7;
            }
            else {
                window.alert("You don't have enough money!")
            }
        }
    };

    console.log(enemyInfo);
    console.log(enemyInfo[0]);
    console.log(enemyInfo[0].name);
    console.log(enemyInfo[0]['attack']);

    startGame();


