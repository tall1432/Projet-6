class Game {
    constructor() {

        this.compteur_de_tour = 0;
        this.board = new Board(10, 10);
        this.players = new Player();
        // déclaration des personnages
        this.player1 = this.player1;
        this.player2 = this.player2;
        this.perso_actuel;
        this.lancementJeu();


    }

    // fonction qui lance le jeu
    lancementJeu() {




            // initialise les personnages
            this.player1 = this.board.player1;
            this.player2 = this.board.player2;
            this.randomNumber();
            console.log(this.player1);
        }
        //         // choix aléatoire du joueur qui commence la partie
    randomNumber() {
        let randomNb = Math.floor((Math.random() * 2) + 1);
        if (randomNb > 1) {
            this.perso_actuel = this.players.player1;
            $(this.perso_actuel).addClass('persoActuel');
            alert(" joueur 1 commence la partie.");
        } else {
            this.perso_actuel = this.players.player2;
            alert("joueur 2 commence la partie.");
            $(this.perso_actuel).addClass('persoActuel');
        }
        // this.toucheEnfonce();
    }
    highlight() {











    }
}


const game = new Game();