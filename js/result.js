document.addEventListener("DOMContentLoaded", function() {
    const resultAnswers = document.getElementById("result-answers");
    const scoreElement = document.getElementById("score");

    // Retrieve selected and correct answers from localStorage
    const selectedAnswers = JSON.parse(localStorage.getItem("selectedAnswers"));
    const correctAnswers = JSON.parse(localStorage.getItem("correctAnswers"));

    let score = 0;

    // Generate the result answers
    for (let i = 0; i < correctAnswers.length; i++) {
        const answerText = selectedAnswers[i] || "No answer selected";
        const isCorrect = selectedAnswers[i] === correctAnswers[i];
        const resultClass = isCorrect ? "correct" : "incorrect";

        const answerElement = document.createElement("p");
        answerElement.textContent = `Q${i + 1}: ${answerText}`;
        answerElement.classList.add(resultClass);
        resultAnswers.appendChild(answerElement);

        if (isCorrect) {
            score++;
        }
    }

    // Display the score
    scoreElement.textContent = `Your score: ${score} / ${correctAnswers.length}`;
});
