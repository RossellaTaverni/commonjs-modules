const getFullName = require('./names.js');
const getHobbies = require('./hobbies.js');

function infoPerson (){
    return {
        fullName: getFullName('Rossella', 'Taverni'),
        hobbies: getHobbies('Palestra', 'Lettura','SerieTV')
    }
}

console.log(infoPerson());