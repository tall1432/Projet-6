class Game {
  constructor() {
    this.compteur_de_tour = 0;
    this.board = new Board(10, 10, 5, 4);
    this.weapons = this.board.weapon;
    this.td = document.getElementsByTagName('td');
    this.nbTours = 0;
    this.currentPlayer = false;
    this.wallLeftSetup();
    this.wallRightSetup();
    this.playersetUp();
    this.weaponsetUp();
    this.osbtaclesetUp();
    this.mov();
    this.fight();
    this.fight2();
    this.display();


  }

  wallLeftSetup() {
    this.wallLeft = [
      this.td[this.board.wallL[0]],
      this.td[this.board.wallL[1]],
      this.td[this.board.wallL[2]],
      this.td[this.board.wallL[3]],
      this.td[this.board.wallL[4]],
      this.td[this.board.wallL[5]],
      this.td[this.board.wallL[6]],
      this.td[this.board.wallL[7]],
      this.td[this.board.wallL[8]],
      this.td[this.board.wallL[9]]

    ]
  }
  wallRightSetup() {

    this.wallRight = [
      this.td[this.board.wallR[0]],
      this.td[this.board.wallR[1]],
      this.td[this.board.wallR[2]],
      this.td[this.board.wallR[3]],
      this.td[this.board.wallR[4]],
      this.td[this.board.wallR[5]],
      this.td[this.board.wallR[6]],
      this.td[this.board.wallR[7]],
      this.td[this.board.wallR[8]],
      this.td[this.board.wallR[9]]

    ]

  }
  osbtaclesetUp() {
    this.obstaclePos = [

      this.obstaclePos1 = this.td[this.board.osbtacle[0]],
      this.obstaclePos2 = this.td[this.board.osbtacle[1]],
      this.obstaclePos3 = this.td[this.board.osbtacle[2]],
      this.obstaclePos4 = this.td[this.board.osbtacle[3]],
      this.obstaclePos5 = this.td[this.board.osbtacle[4]],
      this.obstaclePos6 = this.td[this.board.osbtacle[5]],
      this.obstaclePos7 = this.td[this.board.osbtacle[6]],
      this.obstaclePos8 = this.td[this.board.osbtacle[7]],
      this.obstaclePos9 = this.td[this.board.osbtacle[8]],
      this.obstaclePos10 = this.td[this.board.osbtacle[9]],

    ]

  }
  playersetUp() {
    this.player1 = new Player("player1", 100, '');
    this.player2 = new Player("player2", 100, '');
    this.player1.position = this.td[this.board.player[0]];
    this.player2.position = this.td[this.board.player[1]];
    this.positionRe1 = this.board.player[0];
    this.positionRe2 = this.board.player[1];
    this.nbTours = 0;
    this.player1.position.setAttribute('id', 'player1');
    this.player2.position.setAttribute('id', 'player2');
    document.getElementById("p1").innerHTML = this.player2.description;
    document.getElementById("p2").innerHTML = this.player2.description;
  }
  mov() {
    document.onkeydown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          this.movUp();
          this.movSetUp();
          break;
        case 'ArrowDown':
          this.movDown();
          this.movSetUp();
          break;
        case 'ArrowLeft':
          this.movL();
          this.movSetUp();
          break;
        case 'ArrowRight':
          this.movR();
          this.movSetUp();
          break;
        case 'Enter':

          this.setCurrentPlayer();

          break;
      }
    };
  }
  resetNbtours() {
    if (this.nbTours > 3) {
      this.nbTours = 0;

    }
  }
  switchPlayer() {
    if (this.nbTours === 3) {

      this.setCurrentPlayer();
    }
  }

  setCurrentPlayer() {
    if (this.currentPlayer === false) {
      this.currentPlayer = true;
    }
    else {
      this.currentPlayer = false;
    }
  }
  movUp() {
    if (this.currentPlayer === false) {//  bolean pour switcher entre p1 et p2
      let movU = document.getElementsByTagName('td')[this.positionRe1 - this.board.boxInRow];
      if (this.obstaclePos.includes(movU)) {
        alert('obsatacle');
      }
      else {
        $('#player1').removeAttr('id');
        $(movU).attr("id", "player1");
        this.positionRe1 -= this.board.boxInRow;
        this.attack();
      }
    }
    else {
      // $('.player2').removeClass('player2');
      let movU = document.getElementsByTagName('td')[this.positionRe2 - this.board.boxInRow];
      if (this.obstaclePos.includes(movU)) {
        alert('obsatacle');
      }
      else {
        $('#player2').removeAttr('id');
        $(movU).attr("id", "player2");
        this.positionRe2 -= this.board.boxInRow;
        this.attack();
      }
    }
  }
  movDown() {
    if (this.currentPlayer === false) {//  bolean pour switcher entre p1 et p2
      let movD = document.getElementsByTagName('td')[this.positionRe1 + this.board.boxInRow];
      if (this.obstaclePos.includes(movD)) {
        alert('obsatacle');
      }
      else {
        $('#player1').removeAttr('id');
        $(movD).attr("id", "player1");
        this.positionRe1 += this.board.boxInRow;
        this.attack();
      }
    }
    else {
      let movD = document.getElementsByTagName('td')[this.positionRe2 + this.board.boxInRow];
      if (this.obstaclePos.includes(movD)) {
        alert('obsatacle');
      }
      else {
        $('#player2').removeAttr('id');
        $(movD).attr("id", "player2");
        this.positionRe2 += this.board.boxInRow;
        this.attack();
      }
    }
  }
  movL() {
    if (this.currentPlayer === false) {//  bolean pour switcher entre p1 et p2
      let movL = document.getElementsByTagName('td')[this.positionRe1 - 1];
      if (this.obstaclePos.includes(movL)) {
        alert('obsatacle');
      }
      else if (this.wallRight.includes(movL)) {
        alert('left');
      }
      else {
        $('#player1').removeAttr('id');
        $(movL).attr("id", "player1");
        this.positionRe1 -= 1;
        this.attack();
      }
    }
    else {
      let movL = document.getElementsByTagName('td')[this.positionRe2 - 1];
      if (this.obstaclePos.includes(movL)) {
        alert('obsatacle');
      }
      else if (this.wallRight.includes(movL)) {
        alert('left');
      }
      else {
        $('#player2').removeAttr('id');
        $(movL).attr("id", "player2");
        this.positionRe2 -= 1;
      }
    }
  }
  movR() {
    if (this.currentPlayer === false) {//  bolean pour switcher entre p1 et p2
      let movR = document.getElementsByTagName('td')[this.positionRe1 + 1];
      if (this.obstaclePos.includes(movR)) {
        alert('obsatacle');

      }
      else if (this.wallLeft.includes(movR)) {
        alert('right');
      }
      else {
        $('#player1').removeAttr('id');
        $(movR).attr("id", "player1");
        this.positionRe1 += 1;
        this.attack();
      }
    }
    else {
      let movR = document.getElementsByTagName('td')[this.positionRe2 + 1];
      if (this.obstaclePos.includes(movR)) {
        alert('obstacle');
      }
      else if (this.wallLeft.includes(movR)) {
        alert('right');
      }
      else {
        $('#player2').removeAttr('id');
        $(movR).attr("id", "player2");
        this.positionRe2 += 1;
        this.attack();
      }
    }
  }

  grabWeapon() {
    let weaponClass = this.player1.weapon.clas;
    this.currentWeapon = document.getElementsByTagName('td')[this.positionRe1]
    if (this.weapons.includes(this.positionRe1)) {

      this.currentWeapon.removeAttribute('class');
      this.currentWeapon.setAttribute("is", 'player1');
      this.currentWeapon.setAttribute('class', weaponClass)

      console.log(weaponClass);
    }
    if (this.currentWeapon === this.weapon1Pos) {
      this.player1.weapon = this.weapon1;
      this.player1.describePlayer();
      document.getElementById("p1").innerHTML = this.player1.description;
    }
    if (this.currentWeapon === this.weapon2Pos) {
      this.player1.weapon = this.weapon2;
      this.player1.describePlayer();
      document.getElementById("p1").innerHTML = this.player1.description;
    }
    if (this.currentWeapon === this.weapon3Pos) {


      this.player1.describePlayer();
      document.getElementById("p1").innerHTML = this.player1.description;
    }
    if (this.currentWeapon === this.weapon4Pos) {

      this.player1.weapon = this.weapon4;
      this.player1.describePlayer();
      document.getElementById("p1").innerHTML = this.player1.description;
    }
  }

  grabWeapon2() {
    let weaponClass = this.player2.weapon.clas;
    this.currentWeapon = document.getElementsByTagName('td')[this.positionRe2]
    if (this.weapons.includes(this.positionRe2)) {
      this.currentWeapon.removeAttribute('class');
      this.currentWeapon.setAttribute("id", 'player2');
      this.currentWeapon.setAttribute('class', weaponClass)

      console.log(weaponClass);
    }

    if (this.currentWeapon === this.weapon1Pos) {


      this.player2.weapon = this.weapon1;
      this.player2.describePlayer();
      document.getElementById("p2").innerHTML = this.player2.description;
    }
    if (this.currentWeapon === this.weapon2Pos) {


      this.player2.weapon = this.weapon2;
      this.player2.describePlayer();
      document.getElementById("p2").innerHTML = this.player2.description;
    }
    if (this.currentWeapon === this.weapon3Pos) {

      this.player2.weapon = this.weapon3;
      this.player2.describePlayer();
      document.getElementById("p2").innerHTML = this.player2.description;
    }
    if (this.currentWeapon === this.weapon4Pos) {

      this.player2.weapon = this.weapon4;
      this.player2.describePlayer();
      document.getElementById("p2").innerHTML = this.player2.description;
    }


  }
  weaponsetUp() {
    this.weapon1Pos = this.td[this.weapons[0]];
    this.weapon1Pos.classList.add('weapon1');
    this.weapon2Pos = this.td[this.weapons[1]];
    this.weapon2Pos.classList.add('weapon2');
    this.weapon3Pos = this.td[this.weapons[2]];
    this.weapon3Pos.classList.add('weapon3');
    this.weapon4Pos = this.td[this.weapons[3]];
    this.weapon4Pos.classList.add('weapon4');
    this.weapon1 = this.board.weapon1;
    this.weapon2 = this.board.weapon2;
    this.weapon3 = this.board.weapon3;
    this.weapon4 = this.board.weapon4;


  }

  attack() {

    if (this.positionRe1 === this.positionRe2 + this.board.boxInRow) 
    { this.setTime(); this.btnDisplay() }
    if (this.positionRe1 === this.positionRe2 - this.board.boxInRow) 
    { this.setTime(); this.btnDisplay() }
    if (this.positionRe1 === this.positionRe2 + 1) 
    { this.setTime(); this.btnDisplay() }
    if (this.positionRe1 === this.positionRe2 - 1) 
    { this.setTime(); this.btnDisplay() }
    if (this.positionRe2 === this.positionRe1 + this.board.boxInRow) 
    { this.setTime(); this.btnDisplay() }
    if (this.positionRe2 === this.positionRe1 - this.board.boxInRow) 
    { this.setTime(); this.btnDisplay() }
    if (this.positionRe2 === this.positionRe1 + 1) 
    { this.setTime(); this.btnDisplay() }
    if (this.positionRe2 === this.positionRe1 - 1) 
    { this.setTime(); this.btnDisplay() }


  }
  setTime() {
    let timeoutID = window.setTimeout(this.hideTable, 500);
    $("section").show();
  }




  hideTable() {
    //set time
    alert("le combat commence!!!");
    $("table").hide();

  }


  movSetUp() {

    this.grabWeapon();
    this.grabWeapon2();
    this.nbTours++;
    this.resetNbtours();
    this.switchPlayer();

  }


  fight() {


    $(".btn-attack1").click(() => {

      this.player2.health -= this.player1.weapon.degat;
      this.player2.describePlayer();
      document.getElementById("p2").innerHTML = this.player2.description;
      this.setCurrentPlayer();
      this.btnDisplay();
      console.log(this.player2.description);
      if (this.player2.health === 0) {
        $(".winner1").show();
        $("section").hide();


      }

    })



    $(".btn-defense1").click(() => {

      this.player1.health += this.player2.weapon.degat / 2;
      this.player1.describePlayer();
      document.getElementById("p1").innerHTML = this.player1.description;
      this.setCurrentPlayer();
      this.btnDisplay();
      console.log(this.player1.health);
    })
  }
  fight2() {


    $(".btn-attack2").click(() => {

      this.player1.health -= this.player2.weapon.degat;
      this.player1.describePlayer();
      document.getElementById("p1").innerHTML = this.player1.description;
      console.log(this.player1.description);
      this.setCurrentPlayer();
      this.btnDisplay();
      if (this.player1.health === 0) {
        $("section").hide();
        $(".winner2").show();
      }
    })
    $(".btn-defense2").click(() => {

      this.player2.health += this.player1.weapon.degat / 2;
      this.player2.describePlayer();
      document.getElementById("p2").innerHTML = this.player2.description;
      this.setCurrentPlayer();
      this.btnDisplay();
      console.log(this.player1.health);
    }
    )
  }

  btnDisplay() {
    if (this.currentPlayer === true) {
      $('.btn1').show();

      $('.btn2').hide();
      console.log('true');
    }
    else {
      $(".btn2").show();
      $('.btn1').hide();
      console.log('false');
    }




  }
  display() {
    $(".winner1").hide();
    $(".winner2").hide();
    $("section").hide();

  }

}

const game = new Game();


//  phase combat quand les deux players se retrouve cote a cote le combat est initié 


