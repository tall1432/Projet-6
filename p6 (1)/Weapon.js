class Weapon {
    constructor(name, degat) {
        this.name = name;
        this.degat = degat;
        this.describeWeapon();
    }

    describeWeapon() {
        let description = this.name + " fait " + this.degat + " points de dégâts";
        return description;
    }
}

const ak47 = new Weapon("ak47", 15);
console.log(ak47.describeWeapon());