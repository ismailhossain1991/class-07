// Arrange a data sheet for a family phone book and publish it


const phonebook =[
    {
        name : "Bakar",
        phone : '011234568',
        profession : 'Businessman'
    },
    {
        name : 'Omar',
        phone : '0112214578',
        profession : 'President'
    },
    {
        name : 'Usman',
        phone : '01111235468',
        profession : 'Businessman'
    },
    {
        name : 'Ali',
        phone :'0112214578',
        profession : 'Commander'
    },
    {
        name : 'Hujaifa',
        phone : '0111254878',
        profession : 'Cashier'
    },
    {
        name : 'Abu Hurayra',
        phone : '0112365478',
        profession : 'Teacher'
    },
    {
        name : 'Khalid Saifullah',
        phone : '011254870000',
        profession : 'Marshal'
    },
    {
        name : 'Ibn Abbas',
        phone : '01123654879',
        profession : 'Professor'
    },
    {
        name : 'Musaib Bin Umair',
        phone : '01125487956',
        profession : 'Teacher'
    },
    {
        name : 'saad Bin Muaz',
        phone : '0112365487',
        profession : 'Judge'
    }
]

phonebook.map( (phn) =>{
    console.log(`
    Name        : ${phn.name}
    Phone       : ${phn.phone}
    profession  : ${phn.profession}
    
    `);
});