const timecube = require('./data/timecube.json')
const maxLength = timecube.length

module.exports = {
    max: maxLength,
    generateTimeCube: function (start = 0, stop = maxLength) {
        if (start > stop) return ""
        try {
            return timecube.slice(Math.max(start, 0), Math.min(stop+1, maxLength)).join(" ")
        } catch (ignored){
            return ""
        }

    }
}