// question number o  radianToDegree

function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return "inter a valid radian number"
    } else {
        const pi = Math.PI;
        const totalRedian = radian * (180 / pi)
        const result = totalRedian.toFixed(2)
        return result;
    }


}

const totalDegree = radianToDegree(199)
console.log(totalDegree);


// question number 2 chech js file

function isJavaScriptFile(String) {

    if (typeof String !== 'string') {
        return "please write a file name"
    }
    else {
        if (String.toLocaleLowerCase().endsWith('.js')) {
            return true;
        }
        else {
            return false
        }
    }

}
const fileName = isJavaScriptFile('index.js.ong.JS')

console.log(fileName)






// Question number 3 total oill price




function oilPrice(diesel, petrol, octane) {
    if (typeof diesel !== 'number' && typeof petrol !== 'number' && typeof octane !== 'number') {
        return "please enter price"
    }
    else {
        const dieselP = 114;
        const petrolP = 130;
        const octaneP = 135;
        const dieselPrice = dieselP * diesel;
        const petrolPrice = petrolP * petrol;
        const octanePrice = octaneP * octane;
        const totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;

    }
}

const allprice = price(0, 5, 3)
console.log(allprice)


// Question number 4 publicBusFare


function publicBusFare(people) {
    if (typeof people !== "number") {
        return "plsease enter a valid number"
    }
    else {
        const remainBus = people % 50;
        const remainMicro = remainBus % 11;
        let publickbus = remainMicro * 250;
        return publickbus

    }
}

console.log(publicBusFare(59))








// Question number 5 check isBestFriend


// friend object here

const objOne = { name: "sumon", friend: "salman" }
const objTwo = { name: "salman", friend: 'sumon' }

function isBestFriend(objOne, objTwo) {

    if (typeof objOne !== 'object' && typeof objTwo !== 'object') {
        return "please enter object"
    } else {
        if (objOne.name === objTwo.friend && objOne.friend && objTwo.name) {
            return true
        }
        else {
            return false;
        }
    }

}

const bestFriend = isBestFriend(objOne, objTwo)


console.log(bestFriend)




