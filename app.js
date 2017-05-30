var magicNum = Math.floor(Math.random() * (9));
var guesses = [];

function reset() {
    console.log("reset");
    guesses = [];
    magicNum = Math.floor(Math.random() * (9));
    document.getElementById("game").innerHTML = "";
}

function keyRelease(event) {
    var input = parseInt(event.key);
    console.log(event.key);
    if (input >= 0 && input <= 9) {
        if (guesses.indexOf(input) === -1) {
            guesses.push(input);
            guesses.sort();

            var html = "";
            for (var i = 0; i < guesses.length; i++) {
                var difference = Math.abs(magicNum - guesses[i]);
                var color;
                if (difference == 0) {
                    alert("You win!");
                    reset();
                    return;
                } else if (difference < 3) {
                    color = "hot";
                } else if (difference < 5) {
                    color = "warm";
                } else {
                    color = "cold";
                }

                html += "<div class='number " + color + "' >" + guesses[i] + "</div>"
            }

            document.getElementById("game").innerHTML = html;
        }

    }

}

document.addEventListener("keyup", keyRelease);
