function tabuada(entrada) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${entrada}x${i} = ${entrada * i}`)
    }
}
module.exports = { tabuada };