import Team from '../app';

const daemon = {
    _name: 'Евгения',
    _type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
};

test('adding a character', () => {
    const expected = new Set();
    expected.add(
        {
            _name: 'Евгения',
            _type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        }
    );
    const teamFirst = new Team();
    teamFirst.add(daemon);
    expect(teamFirst.members).toEqual(expected);
});

test('re-adding a character', () => {
    const teamSecond = new Team();
    teamSecond.add(daemon);
    expect(() => {
        teamSecond.add(daemon);
    }).toThrow(new Error('Данный персонаж уже есть в команде'));
});

test('adding multiple characters', () => {
    const characters = [
        {
            _name: 'Евгения',
            _type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        },
        {
            _name: 'Максим',
            _type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        },
        {
            _name: 'Анастасия',
            _type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        }
    ];
    const expected = new Set();
    expected.add([
        {
            _name: 'Евгения',
            _type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        },
        {
            _name: 'Максим',
            _type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        },
        {
            _name: 'Анастасия',
            _type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        }
    ]
    );
    const teamSecond = new Team();
    teamSecond.addAll(characters);
    expect(teamSecond.members).toEqual(expected);
});

test('converting to an array', () => {
    const teamThree = new Team();
    teamThree.add(daemon);
    expect(teamThree.toArray()).toEqual([
        {
            _name: 'Евгения',
            _type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        }
    ]);
});