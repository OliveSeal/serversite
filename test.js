function submitQuiz() {
    // Get user-selected answers
    var answer1 = document.querySelector('input[name="q1"]:checked');
    var answer2 = document.querySelector('input[name="q2"]:checked');

    // Check if all questions are answered
    if (!answer1 || !answer2) {
        alert("Please answer all questions!");
        return;
    }

    // Check answers and display result
    var score = 0;

    if (answer1.value === "tenester") {
        score += 1;
    }

    if (answer2.value === "mars") {
        score += 1;
    }

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Your score: " + score + "/2";
}