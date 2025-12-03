function findTheOldest(people){
  let temp;
  for(let i = 0; i < people.length; i++){
    if("yearOfDeath" in people[i]){
      people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
    }else{
      people[i].age = getCurrentAge(people[i]);
    }
  }
  
  for(let i = 0; i < people.length; i++){
    for(let j = 0; j < people.length - 1; j++){
      if(people[j+1].age > people[j].age){
        temp = people[j+1];
        people[j+1] = people[j];
        people[j] = temp;
      }
    }
  }
  
  return (`The oldest person is ${people[0].name}. He is/was ${people[0].age} years old!`)
  
}

function getCurrentAge(person){
  let now = new Date()
  let currentYear = now.getFullYear();
  return currentYear - person.yearOfBirth
}



// Do not edit below this line
module.exports = findTheOldest;
