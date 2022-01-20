

function readFile(){
    const fs = require('fs')
    fs.readFile('data.json', 'utf-8', (err,data) => {
        if (err) throw err
        console.log(data)
    })
}

console.log(readFile())

// function readFileAsync
//     const data = fs.readFileSync('data.json', 'utf-8')
// console.log(data)

