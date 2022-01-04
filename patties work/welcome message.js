// Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive


const member = [
    {
        name        : 'Mizan',
        age         : 31,
        designation : 'HR & Admin'
    },
    {
        name        : 'Shawon',
        age         : 17,
        designation : 'JS Devs'
    },
    {
        name        : 'Ismail',
        age         : 30,
        designation : 'PHP Devs'
    },
    {
        name        : 'Ayesha',
        age         : 26,
        designation : 'Laravel Devs'
    },
    {
        name        : 'Tanvir',
        age         : 15,
        designation : 'MD'
    },
    {
        name        : 'Junaid',
        age         : 150,
        designation : 'CEO'
    },
    {
        name        : 'Hridoy',
        age         : 38,
        designation : 'AGM'
    },
    {
        name        : 'Mahabub',
        age         : 27,
        designation : 'Hero Mahabub'
    },
    {
        name        : 'Imran',
        age         : 300,
        designation : 'GM'
    },
    {
        name        : 'Asraf',
        age         : 34,
        designation : 'Owner'
    }

]

member.map( (data) =>{
    if( data.age >= 18 && data.age <= 40){
        console.log(`
        Name            : ${data.name}
        Age             : ${data.age} years
        designation     : ${data.designation}
        
        Your are WELCOME!!!
        --------------------
        
        `);


    }else{
        console.log(`
        
        Name            : ${data.name}
        Age             : ${data.age} years
        designation     : ${data.designation}

        
        You are not alowed!
        --------------------
        `);
    }

});



