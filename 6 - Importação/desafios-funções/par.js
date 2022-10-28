function numeroPar(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element % 2 === 0) {
            console.log(`Números pares: ${element}`);
        }
    }
}
module.exports = { numeroPar };