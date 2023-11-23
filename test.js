function submitQuiz() {
    // Get user-selected answers
    var answer1 = document.querySelector('input[name="q1"]:checked');
    var answer2 = document.querySelector('input[name="q2"]:checked');
    var answer3 = document.querySelector('input[name="q3"]:checked');
    var answer4 = document.querySelector('input[name="q4"]:checked');
    var answer5 = document.querySelector('input[name="q5"]:checked');
    var answer6 = document.querySelector('input[name="q6"]:checked');

    // Check if all questions are answered
    if (!answer1 || !answer2 || !answer3 || !answer4 || !answer5 || !answer6) {
        alert("Du må svare på alle spørsmåla.");
        return;
    }

    // Check answers and display result
    var score = 0;

    if (answer1.value === "tenester") {
        score += 1;
    }

    if (answer2.value === "raid") {
        score += 1;
    }

    if (answer3.value === "http/https") {
        score += 1;
    }

    if (answer4.value === "organisere og dele") {
        score += 1;
    }

    if (answer5.value === "koble ilag") {
        score += 1;
    }

    if (answer6.value === "dynamisk ip") {
        score += 1;
    }

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Poeng: " + score + "/6";
}