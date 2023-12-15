let person = {
    gender : 'Male',
    age    : 39,
    name   : 'Mukhtiar',
    qualification: 'MS-LIS',
    contatct: '03459170059'
}
console.log(person)




// ######### Operation on Object ########
/*
   Access properties
        - one by one 
        -loop through whole object
   Update properties
   Delete properties
   Add proterties
*/

// Accessing object properties

console.log(person.gender)
console.log(person['gender'])

// Update on objects properties


person.contatct ='03132884117'
person.age = 38

// Delete an Objects Properties
delete person.age

// add a new peroperty to an object

person.marital_status = 'Married'
person.nationality = 'Pakistani'


// Looping and Object Properties
// ######### via for in loop  ########
for (key in person){
    console.log(`${key}: ${person[key]}`)
}

let patient1= {p_id :1, ward :'generl', doctor :'Ali', disease : 'flu', age:59}
let patient2= {p_id :11, ward :'generl', doctor :'ahmad', disease : 'sugar', age:60}
let patient3= {p_id :222, ward :'generl', doctor :'aslam', disease : 'bp', age:34}
let patient4= {p_id :3333, ward :'generl', doctor :'Ali', disease : 'cancer', age:77}
let patient5= {p_id :444, ward :'generl', doctor :'saleem', disease : 'flu', age:87}
let patient6= {p_id :5557, ward :'generl', doctor :'faisal', disease : 'hiv', age:65}
let patient7= {p_id :6656, ward :'generl', doctor :'Ali', disease : 'flu', age:87}
let patient8= {p_id :78787, ward :'generl', doctor :'kamran', disease : 'hcv', age:33}
let patient9= {p_id :71471, ward :'generl', doctor :'Ali', disease : 'flu', age:77}
let patient10= {p_id :413544, ward :'generl', doctor :'Ali', disease : 'flu', age:59}


let patients = [patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient9,patient10]
for (let a=0; a<=patients.length; a++){
    for (key in patients[a]){
        if (key =='disease'){
            if (patients[a][key]=='flu'){
                console.log(patients[a]['p_id'])
            }
        }
    }
    
}
// who are the doctor for cancer patients

for (let a=0; a<=patients.length; a++){
    for (key in patients[a]){
        if (key=='disease'){
            if (patients[a][key]=='cancer'){
                console.log(patients[a]['doctor'])
            }
        }
    }
}



   
