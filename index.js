// code your solution here
function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun('bathe my dog!')

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*"){
    return function feeling(iAm = "special"){
        return `You are ${symbol}${iAm}${symbol}!`
    }
}