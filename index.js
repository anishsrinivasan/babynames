const csv = require("csvtojson");
const csvFilePath = "./names4.csv";
let json,
    allNames = [];
names = [];
csv()
    .fromFile(csvFilePath)
    .then(jsonObj => {
        json = jsonObj.sort((a, b) => {
            const ab = a.name.toUpperCase();
            const ba = b.name.toUpperCase();
            if (ab < ba) {
                return -1;
            } else {
                return 0;
            }
        });
        findNames();
    });

async function findNames() {
    const test = await json.map(name => {
        if (name.name != "" && checkNum(name.name) == 5) {
            console.log(name.name);
        }
    });
    // console.log(json.length);
}

function checkNum(name) {
    const split = name.split("");
    let total = 0;
    split.map(s => {
        const num = numerologyNum(s.toUpperCase());
        total = total + num;
    });
    const destiny = total.toString().split("");
    let destinyNumber;
    if (destiny[1]) {
        destinyNumber = parseInt(destiny[0]) + parseInt(destiny[1]);
    } else {
        destinyNumber = parseInt(destiny[0]);
    }
    return destinyNumber;
}

function numerologyNum(s) {
    let one = ["A", "I", "J", "K", "Q", "Y"].includes(s);
    let two = ["B", "K", "R"].includes(s);
    let three = ["C", "G", "L", "S"].includes(s);
    let four = ["D", "M", "T"].includes(s);
    let five = ["E", "H", "N", "X"].includes(s);
    let six = ["U", "V", "W"].includes(s);
    let seven = ["O", "Z"].includes(s);
    let eight = ["F", "P"].includes(s);
    if (one) {
        return 1;
    } else if (two) {
        return 2;
    } else if (three) {
        return 3;
    } else if (four) {
        return 4;
    } else if (five) {
        return 5;
    } else if (six) {
        return 6;
    } else if (seven) {
        return 7;
    } else if (eight) {
        return 8;
    }
}
