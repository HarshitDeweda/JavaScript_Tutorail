// objects inside Array 
// very usefull in real wrold application

const Students=
[
   {StudentId : 18 , firstName: "Harshit" , Gender:"Male"},
   {StudentId : 36 , firstName: "Priyansh" , Gender:"Male"},
   {StudentId : 20 , firstName: "Jaswent" , Gender:"Male"},
]


for(let Student of Students){
    console.log(Student.firstName);
}

