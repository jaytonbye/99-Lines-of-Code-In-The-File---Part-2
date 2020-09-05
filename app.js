let friends = ["Neeraj", "WayneCarl", "Bobbo", "The Piker", "The Stain"]

document.getElementById('theButton').addEventListener('click',()=>{
    for (name of friends){
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        let h3Text = document.createTextNode(name)
        let p = document.createElement('p')
        let pText
        document.body.appendChild(div)
        div.appendChild(h3)
        h3.appendChild(h3Text)
        let br = document.createElement('br')
        
        

        for (let x=99; x>0; x--){
            div.appendChild(p) //Why isn't this working? it's only creating 1 paragraph element. I want it to create one for each line.
            if (x>2){
                pText = document.createTextNode(`${x} lines of code in the file, ${x} lines of code; ${name} strikes one out, clears it all out, ${x-1} lines of code in the file`)
            }else if (x===2){
                pText = document.createTextNode(`${x} lines of code in the file, ${x} lines of code; ${name} strikes it out, clears it all out, ${x-1} line of code in the file`)
            }else {
                pText = document.createTextNode(`${x} line of code in the file, ${x} line of code; ${name} strikes it out, clears it all out, ${x-1} lines of code in the file`)
            }
            p.appendChild(pText)
            div.appendChild(br)
        }
    }
})

