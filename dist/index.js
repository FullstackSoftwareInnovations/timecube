const generator = require('./TimeCubeGenerator')

module.exports = {
    maxLines: generator.maxLines,
    generate: generator.generateTimeCube,
    generateRandom: generator.generateRandom,

    maxChunks: generator.maxChunks,
    generateChunks: generator.generateTimeCubeChunks,
    generateRandomChunk: generator.generateRandomChunk


}
