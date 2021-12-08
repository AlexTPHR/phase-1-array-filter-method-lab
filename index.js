// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(function(driver)
    {
       return driver.toLowerCase() === string.toLowerCase()
    })
 }

function fuzzyMatch(array, string){
    return array.filter(function(element) {
        return element.startsWith(string) })
}

function matchName (drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name
    })
}