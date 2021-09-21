/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    console.log(n)
    let x = n-1
    if (n % x == 0){
        return true
    }
        else {
            return divisorGame(x)
        }
};