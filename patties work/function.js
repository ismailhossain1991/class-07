//Create an array and object data structure with some data of fifth grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result



function Result () {


    this.gpa = function(marks){
 
   

        if(marks >= 0 && marks <= 32){
            return 0.00;
        }else if(marks >= 33 && marks <= 39){
            return 1.00;
        }else if(marks >= 40 && marks <= 49){
            return 2.00;
        }else if(marks >= 50 && marks <= 59){
            return 3.00;
        }else if(marks >= 60 && marks <= 69){
            return 3.50;
        }else if(marks >= 70 && marks <= 79){
            return 4.00;
        }else if(marks >= 80 && marks <= 100){
            return 5.00;
        }
    
        
    }


    this.grade = function(marks){
 

        if(marks >= 0 && marks <= 32){
            return 'F';
        }else if(marks >= 33 && marks <= 39){
            return 'D';
        }else if(marks >= 40 && marks <= 49){
            return 'C';
        }else if(marks >= 50 && marks <= 59){
            return 'B';
        }else if(marks >= 60 && marks <= 69){
            return 'A-';
        }else if(marks >= 70 && marks <= 79){
            return 'A';
        }else if(marks >= 80 && marks <= 100){
            return 'A+';
        }
    
        
    }

    this.cgpa = function(bn,en,ma,s,ss,rs){

        let total_cgpa = (bn + en + ma + s + ss + rs); 
        let cgpa = (total_cgpa/6).toFixed(2);
    
        if(bn == 0 || en == 0 || ma == 0 || s == 0 || ss == 0 || rs ==0){
            return `You Are Failed & Your grade is F`;
        }else{
            return `Your CGPA is : ${cgpa} & ${this.total_grade(cgpa)}`; 
        }
    }
    
    this.total_grade = function(gpa){
    
        if(gpa >= 0 && gpa < 1){
            return `Your Grade is F`;
        }else if(gpa >= 1 && gpa < 2){
            return `Your Grade is D`;
        }else if(gpa >= 2 && gpa < 3){
            return `Your Grade is C`;
        }else if(gpa >= 3 && gpa < 3.5){
            return `Your Grade is B`;
        }else if(gpa >= 3.5 && gpa < 4){
            return `Your Grade is A-`;
        }else if(gpa >= 4 && gpa < 5){
            return `Your Grade is A`;
        }else if(gpa == 5){
            return `Your Grade is A+`;
        }
    }
}

