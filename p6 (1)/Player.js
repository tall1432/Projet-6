 class Player {
     constructor() {


         this.health = 100;
         this.player1 = $('player' [0]);
         this.player2 = $('player' [1]);
         this.weapon = [];
         this.describePlayer();
     }
     describePlayer() {
         const description = this.player1Name + " possède " + this.health + " et fait " + this.weapon + " points de dégâts avec son arme";
         return description;
     }

 }