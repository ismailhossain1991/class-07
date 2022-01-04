// Create a MERN stack, Laravel, Django, Golan, WordPress, java deves students data structure and make their total income sheet with per developer data, Find specific students.

const dev = [
    {
        id          : 1,
        name        : 'ismail',
        age         : 30,
        skill       : 'Mern Stack',
        income      : 500,
        location    :'Rajshahi',
        gerder      : 'Male'
    },
    {
        id          : 2,
        name        : 'israk',
        age         : 25,
        skill       : 'Laravel',
        income      : 1200,
        location    :'Godagari',
        gerder      : 'Male'
    },
    {
        id          : 3,
        name        : 'khatheza',
        age         : 26,
        skill       : 'Django',
        income      : 1100,
        location    :'Mirpur',
        gerder      : 'Female'
    },
    {
        id          : 4,
        name        : 'Limi',
        age         : 28,
        skill       : 'Golan',
        income      : 1400,
        location    :'Uttora',
        gerder      : 'Female'
    },
    {
        id          : 5,
        name        : 'Asik',
        age         : 33,
        skill       : 'WordPress',
        income      : 1800,
        location    :'Mirpur',
        gerder      : 'Male'
    },
];

let total = 0;

dev.map( data => {
    console.log(`
    Id:    ${data.id}  
    Name : ${data.name}
    Age : ${data.age}
    Skill: ${data.skill}
    Income: ${data.income}
    Location:${data.location}
    Gender: ${data.gerder}
    
    `);

    total = total  + data.income;
});

console.log(`Total Income $ ${total} `);