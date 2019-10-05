class Board {
    constructor(rows, columns) {
            this.rows = rows;
            this.columns = columns;
            this.box = this.rows * this.columns;
            this.mapElements = [];
            this.player = [];
            this.boxId = this.boxId;
            this.randomBox = this.randomBox;
            this.weapon = [];
            this.init();

        }
        //     //
    insertHtml() {

        let body = document.getElementsByTagName("body")[0];
        let tbl = document.createElement("table");
        for (let i = 0; i < this.rows; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < this.columns; j++) {
                let cell = document.createElement("td");
                cell.classList.add("cell");
                row.appendChild(cell);
                tbl.appendChild(row);
            }
        }
        body.appendChild(tbl);

    };

    randomCell() {
        let allCells = $('.cell');
        this.randomBox = Math.floor(Math.random() * allCells.length);
        allCells.eq(this.randomBox).addClass('active');
        console.log(this.randomBox);
    }

    generatPlayer() {

        if (this.player.includes(this.randomBox)) {
            this.player.push(this.randomBox);
        } else {
            this.randomCell();


        }
        console.log(this.player.length);
    }

    // genRandomBox(objectType) {
    //     let rows = document.getElementmtallsByTagName('td');

    //     let cols = document.getElementsByTagName('tr');
    //     console.log(cols.length);
    //     const randomRow = Math.floor(Math.random() * (rows.length));
    //     const randomCol = Math.floor(Math.random() * (cols.length));
    //     this.randomBox = [randomRow, randomCol];

    // }
    init() {
        this.insertHtml();
        this.randomCell();

        this.generatPlayer();
        // this.generateWeapons();
    }
}