//Create an array and object data structure with some data of fifth grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result


const std =[
    {
        roll : 1,
        name : 'Khalil',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 86

    },
    {
        roll : 2,
        name : 'Julfiker',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 86

    },
    {
        roll : 3,
        name : 'Arsad',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 86

    },
    {
        roll : 4,
        name : 'Mutalab',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 86

    },
    {
        roll : 5,
        name : 'Ayesha',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 86

    },
    {
        roll : 6,
        name : 'Mizan',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 86

    },
    {
        roll : 7,
        name : 'Ismail',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 86

    },
    {
        roll : 8,
        name : 'Tanvir',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 86

    },
    {
        roll : 9,
        name : 'Wudud',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 86

    },
    {
        roll : 10,
        name : 'Hridoy',
        bn  : 70,
        en  : 75,
        mt  : 80,
        s   : 68,
        ss  : 74,
        rel : 29

    },
    

    
];

std.map( (data) => {
    let total_mark = (data.bn+data.en+data.mt+data.s+data.ss+data.rel);

    let result = new Result();

    console.log(`
    Name    :  ${data.name}
    Roll    :  ${data.roll}

    -------------------------------
      SUBJECT                    Marks                      GPA                             GRADE
       
       Bangla                    ${data.bn}                  ${result.gpa(data.bn)}                ${result.grade(data.bn)}  
       English                   ${data.en}                  ${result.gpa(data.en)}                ${result.grade(data.en)}
       Math                      ${data.mt}                  ${result.gpa(data.mt)}                ${result.grade(data.mt)}
       Science                   ${data.s}                   ${result.gpa(data.s)}                 ${result.grade(data.s)}
       Social Science            ${data.ss}                  ${result.gpa(data.ss)}                ${result.grade(data.ss)}
       Religion                  ${data.rel}                 ${result.gpa(data.rel)}               ${result.grade(data.rel)}

     -------------------------------------------------------------------------------------------------------------  
         Your Total Mark : ${total_mark} & ${result.cgpa(result.gpa(data.bn),result.gpa(data.en),result.gpa(data.mt),result.gpa(data.s),result.gpa(data.ss),result.gpa(data.rel))}   
    `);

});

   

    
    
   


