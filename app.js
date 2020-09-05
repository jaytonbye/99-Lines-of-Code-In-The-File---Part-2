let friends = ["Neeraj", "WayneCarl", "Bobbo", "The Piker", "The Stain"]

/**
for (name of friends) {
    for (let x=99; x>0; x--){
        if (x>2){
            console.log(`${x} lines of code in the file, ${x} lines of code; ${name} strikes one out, clears it all out, ${x-1} lines of code in the file`)
        }else if (x=2){
            console.log(`${x} line of code in the file, ${x} line of code; ${name} strikes it out, clears it all out, ${x-1} line of code in the file`)
        }else {
            console.log(`${x} line of code in the file, ${x} line of code; ${name} strikes it out, clears it all out, ${x-1} lines of code in the file`)
        }
    }
}
**/

for (name of friends){
    for (let x=99; x>0; x--){
        if (x>2){
            console.log(`${x} lines of code in the file, ${x} lines of code; ${name} strikes one out, clears it all out, ${x-1} lines of code in the file`)
        }else if (x===2){
            console.log(`${x} line of code in the file, ${x} line of code; ${name} strikes it out, clears it all out, ${x-1} line of code in the file`)
        }else {
            console.log(`${x} line of code in the file, ${x} line of code; ${name} strikes it out, clears it all out, ${x-1} lines of code in the file`)
        }
    }
}