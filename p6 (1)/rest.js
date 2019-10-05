class Board {
    constructor(rows, columns) {

            this.rows = rows;
            this.columns = columns;
            this.mapElements = [];
            this.player = [];
            this.totalBox = this.rows * this.columns;
            this.randomBox = this.randomBox;
            this.weapon = [];
            this.init();
            this.moov();
        }
        //     //
    insertHtml() {
        let body = document.getElementsByTagName("body")[0];
        let tbl = document.createElement("table");
        let id = 0;
        for (let i = 0; i < this.rows; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < this.columns; j++) {
                let cell = document.createElement("td");

                cell.setAttribute('id', id)
                cell.setAttribute('row', i);
                cell.setAttribute('col', j);
                cell.className = 'block';
                row.appendChild(cell);
                tbl.appendChild(row);
                id++;



            }
            body.appendChild(tbl);

        }
    }


    findIdByRowCol(row, col) {
        const rowList = $.makeArray($('[row =' + row + ']'));
        const colList = $.makeArray($('[col =' + col + ']'));

        for (var i in colList) {
            for (var j in rowList) {
                if (colList[i] == rowList[j]) {
                    return colList[i].getAttribute('id');
                }
            }
        }

    }
    generateObstacles() {
        for (let i = 0; i <= 9; i++) {
            this.randomGenerate('obstacle');
        }
    }
    generateObstacle() {

        let currentId = this.findIdByRowCol(this.randomBox[0], this.randomBox[1])

        console.log(currentId);

        document.getElementById(currentId).classList.add('obstacle');

        //row.querySelectorAll('col', this.randomBox[1]).classList.add('obstacle');
        this.mapElements.push(this.randomBox);
    }
    randomGenerate(objectType) {
        const randomRow = Math.floor(Math.random() * (this.rows));
        const randomCol = Math.floor(Math.random() * (this.columns));
        this.randomBox = [randomRow, randomCol];
        if (this.mapElements.includes(this.randomBox)) {
            this.randomGenerate(objectType);
        } else {
            this.objectTypeGenerate(objectType);
        }
    }
    objectTypeGenerate(objectType) {
        switch (objectType) {
            case 'obstacle':
                this.generateObstacle();
                break;
            case 'player':
                this.generatePlayer();
                break;
            case 'weapon':
                this.generateWeapon();
            default:
                console.log('erreur');
        }
    }
    generatePlayers() {

        this.randomGenerate('player');
    }

    generatePlayer() {
        let currentId = this.findIdByRowCol(this.randomBox[0], this.randomBox[1])

        document.getElementById(currentId).classList.add('player');
        this.player.push(this.randomBox);
        console.log(this.player);
    }
    generateWeapons() {
        for (let i = 0; i < 4; i++) {
            this.randomGenerate('weapon');
        }
    }
    generateWeapon() {
        let currentId = this.findIdByRowCol(this.randomBox[0], this.randomBox[1])

        document.getElementById(currentId).classList.add('weapon');
        this.weapon.push(this.randomBox);
        console.log(this.player);
    }
    moov() {
        document.onkeydown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    alert('déplacement impossible ');
                    break;
                case 'ArrowDown':
                    alert('down arrow')
                    break;
                case 'ArrowLeft':
                    // left arrow
                    break;
                case 'ArrowRight':
                    // right arrow
            }
        };
    }
    init() {
        this.insertHtml();
        this.generateObstacles();
        this.generatePlayers();
        this.generateWeapons();
    }
}
const test = new Board(10, 10);