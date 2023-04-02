// Code your solution here
function findMatching(array, name){

    const drivers = array.filter(match => match.toUpperCase() === name.toUpperCase())
    console.log(array)
    return drivers
}



function fuzzyMatch(array, letter){
    const drivers = array.filter(match => match.slice(0,2) === letter)
    return drivers
}


function matchName(array, name){
    
    const drivers = array.filter(match => match.name === name)
    
    return drivers
}