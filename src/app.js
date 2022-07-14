export class Character {
    constructor(name, type) {
        if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Некорректное значение');
        }

        const person = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        const isCorrect = person.findIndex(item => item === type)

        if (isCorrect === -1) {
            throw new Error('Некорректный тип');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health !== 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;

        } else {
            throw new Error('нельзя повысить левел умершего');
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

