import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from "../index";

test('basic test', () => {
    try {
        const bowerman = new Bowerman('Bowman', 'Bowman');
        expect(bowerman.name).toBe('Bowman')
        expect(bowerman.type).toBe('Bowman')
    }
    catch (err) {
        expect(err.message).toBe('Некорректное значение')
    }
})

test('levelUp', () => {
    try {
        const bowerman = new Bowerman('Bowman', 'Bowman');
        expect(bowerman.level).toBe(1)
        bowerman.levelUp();
        expect(bowerman.level).toBe(2)
    }
    catch (err) {
        expect(err.message).toBe('нельзя повысить левел умершего')
    }
})

test('levelUp', () => {
    try {
        const bowerman = new Bowerman('Bowman', 'Bowman');
        bowerman.health = 0;
        bowerman.levelUp();
    }
    catch (err) {
        expect(err.message).toBe('нельзя повысить левел умершего')
    }
})

test('damage', () => {
    const bowerman = new Bowerman('Bowman', 'Bowman');
    expect(bowerman.health).toBe(100)
    bowerman.damage(1);
    expect(bowerman.health).toBe(99.25)
})
