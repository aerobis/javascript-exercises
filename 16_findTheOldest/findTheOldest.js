const findTheOldest = function(people) {
    let oldestPerson = people[0];
    let currentYear = new Date().getFullYear();

    const getAge = function(people){
        let deathYear = people.yearOfDeath || currentYear;
        return deathYear - people.yearOfBirth;
    }

    for(let person of people){
        if(getAge(person) > getAge(oldestPerson)){
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
