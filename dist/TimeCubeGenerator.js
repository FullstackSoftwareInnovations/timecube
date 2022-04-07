const timecube = require('./data/timecube.json')
const paragraphs = require('./data/paragraphs.json')
const maxLength = timecube.length -1

module.exports = {
    maxLines: maxLength,

    maxChunks: paragraphs.length-1,

    generateTimeCube: function (start = 0, stop = maxLength, formatted = false) {
        if (start > stop) return ""
        try {

            return formatSelection(timecube.slice(Math.max(start, 0), Math.min(stop+1, maxLength)).join(" "), formatted)
        } catch (ignored){
            return ""
        }

    },

    generateRandom: function (formatted = false) {
        try {
            let rand = Math.floor(Math.random() * timecube.length)
            return formatSelection(timecube[rand], formatted)
        } catch (ignored){
            return ""
        }
    },


    generateTimeCubeChunks: function (count = 1, start = 0, stop = paragraphs.length - 1, formatted = false){

        try {
            let chunks = []

            for( let cIndex = start; chunks.length < count; cIndex++){
                let cStart = paragraphs[cIndex]
                let cStop = paragraphs[cIndex+1]
                let chunk = timecube.slice(cStart,cStop).join(" ")
                console.log(chunk)
                chunks.push(formatSelection(chunk, formatted))
            }
            return chunks
        } catch (ignored){

            return [""]
        }
    },

    generateRandomChunk: function (formatted = false) {
        try {
            let rand = Math.floor(Math.random() * paragraphs.length)
            let cStart = paragraphs[rand]
            let cStop = paragraphs[rand+1]
            return formatSelection(timecube.slice(cStart,cStop).join(" "), formatted)
        } catch (ignored){
            return ""
        }
    },
}

function formatSelection(line, format){
    line = format ? line.replace(/\\n/g, '\n') : line.replace(/\\n/g, '')
    return line
}