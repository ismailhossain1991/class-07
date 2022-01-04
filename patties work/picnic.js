//Create fees array and object data for a picnic where everyone will provide free basic information for everyone.

const picnic =[
    {
        name : 'Bakar',
        phone : '3265874125',
        paid : 1500,
        address : 'Uttara'
    },
    {
        name : 'ismail',
        phone : '3265874125',
        paid : 800,
        address : 'Mirpur'
    },
    {
        name : 'Rajib',
        phone : '3265487125',
        paid : 1500,
        address : 'Banani'
    },
    {
        name : 'Asadil',
        phone :'326587412',
        paid : 500,
        address : 'Gulshan'
    },
    {
        name : 'Kibria',
        phone : '3265987412',
        paid : 1500,
        address : 'Baridhara'
    },
    {
        name : 'Taher',
        phone : '3215874596',
        paid : 1500,
        address : 'Bashundhara'
    },
    {
        name : 'Israk',
        phone : '6598745213',
        paid : 1500,
        address : 'Niketon'
    },
    {
        name : 'Iqbil',
        phone : '9874562123',
        paid : 1500,
        address : 'Mohakhali'
    },
    {
        name : 'Jabbar',
        phone : '125487956',
        paid : 1500,
        address : 'Rampura'
    },
    {
        name : 'Sohidul',
        phone : '1236548',
        paid : 1000,
        address : 'Motijhil'
    }
]


picnic.map( (pic) =>{
    
        if( pic.paid >= 1500){
            console.log(`

            You Already Paid Picnic Fee.

            Name        : ${pic.name}
            Phone       : ${pic.phone}
            Paid Amount : ${pic.paid}tk
            Address     : ${pic.address}
            `);
        }else if( pic.paid < 1500 ){
            console.log(`
                
            You Don't Paid Picnic Fee Yet. 
            you Need Pay More ${1500-pic.paid} tk

            Name        : ${pic.name}
            Phone       : ${pic.phone}
            Paid Amount : ${pic.paid}tk
            Address     : ${pic.address}
            `);
        }
    
});




