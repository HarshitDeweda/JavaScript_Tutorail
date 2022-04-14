//nested destructuring

const Students=
[
   {StudentId : 18 , firstName: "Harshit" , Gender:"Male"},
   {StudentId : 36 , firstName: "Priyansh" , Gender:"Male"},
   {StudentId : 20 , firstName: "Jaswent" , Gender:"Male"},
]

//const [Student1 , Student2, Student3] = Students;
//console.log(Student1);

//const [{firstName} , ,{Gender}] = Students;
//console.log(firstName);
//console.log(Gender);

const [{firstName : Student1firstName , StudentId } , ,{Gender : Student3gender}] = Students;
console.log(Student1firstName);
console.log(StudentId);
console.log(Student3gender);