/* Write your code below. Good luck! 🙂 */

const calcTip = (input) => {
    if(input >= 50 && input <=300){
        return input * 15/100
    } else{
        return input * 20/100
    }
}

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]


const total = [(tips[0] + bills[0]), (tips[1] + bills[1]),(tips[2] + bills[2])]


console.log(total)