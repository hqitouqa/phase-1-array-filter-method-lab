// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
/*function findMatching(drivers,string){
    drivers.filter(function(value){
        return value === string
    })
}

console.log(findMatching(drivers, "Bobby"))
*/
function findMatching(drivers, string){

 return drivers.filter(function(driver){
    if(driver.toUpperCase() == string.toUpperCase()){
        return true
    }
})
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver){
        let l=string.length
        if(driver.charAt()===string){
            return true
        }
    })
}

function matchName(drivers, string){
    return drivers.filter(function(driver){
        if(driver.name===string){
            return driver
        }
    })
}