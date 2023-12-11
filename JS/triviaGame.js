let isFirstQuestion = true;

async function getTrivia() {
    const url = "https://opentdb.com/api.php?amount=1&type=multiple";
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayTrivia(data.results[0]);

        // Change button text after the first question is fetched
        if (isFirstQuestion) {
            document.getElementById('triviaButton').innerHTML = 'Next Question';
            isFirstQuestion = false;
        }
    } catch (error) {
        console.error("Error fetching trivia data:", error);
    }
}

function displayTrivia(trivia) {
    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');

    questionEl.innerHTML = trivia.question;
    answersEl.innerHTML = '';

    const answers = [...trivia.incorrect_answers, trivia.correct_answer];
    shuffleArray(answers);

    answers.forEach(answer => {
        const li = document.createElement('li');
        li.innerHTML = answer;
        li.addEventListener('click', () => checkAnswer(answer, trivia.correct_answer, li));
        answersEl.appendChild(li);
    });
}

function checkAnswer(selected, correct, selectedEl) {
    const answersEl = document.getElementById('answers');
    const answersList = answersEl.getElementsByTagName('li');

    Array.from(answersList).forEach(answerEl => {
        if (answerEl.innerHTML === correct) {
            answerEl.classList.add('correct');
        } else {
            answerEl.classList.add('incorrect');
        }

        // Disable further clicks
        answerEl.style.pointerEvents = 'none';
    });

    // Display custom modal
    if (selected === correct) {
        showModal("Correct!");
    } else {
        showModal("Wrong Answer. The correct answer was: " + correct);
    }

    setTimeout(getTrivia, 2000); // Delay for the next question
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showModal(message) {
    const modal = document.getElementById('customAlert');
    const span = document.getElementsByClassName("close")[0];
    const messageEl = document.getElementById('alertMessage');

    messageEl.innerText = message;
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Load initial trivia question
getTrivia();