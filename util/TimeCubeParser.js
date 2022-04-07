const fs = require("fs");


const rawTimecube = fs.readFileSync('./util/raw-timecube.txt', {encoding:'utf8', flag:'r'})

let paragraphIndices = [0]
let sentences = []
let index = 0

rawTimecube.split('\r\n').forEach((line) => {
    line = line.trim()
    if (line === '') return

    if (line === '*')  {
        paragraphIndices.push(index)
        return
    }

    index+=1
    sentences.push(line)
})

fs.writeFileSync('./dist/data/timecube.json', JSON.stringify(sentences), {encoding:'utf8', flag:'w+'})
fs.writeFileSync('./dist/data/paragraphs.json', JSON.stringify(paragraphIndices), {encoding:'utf8', flag:'w+'})
