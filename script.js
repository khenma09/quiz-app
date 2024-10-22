let currentQuestion = 0;
let userAnswers = new Array(30); // Track answers for the 30 random questions
let shuffledQuizData = [];

// Function to shuffle questions and ensure only 30 unique questions per quiz
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// Function to load only 30 random questions for each attempt
function loadRandomQuestions() {
	const randomQuestions = shuffle([...quizData]).slice(0, 30); // Select 30 unique questions
	return randomQuestions;
}

// Function to load the current question into the form as clickable text buttons
function loadQuestion() {
	const quizForm = document.getElementById("quiz-form");
	quizForm.innerHTML = ""; // Clear previous question

	const data = shuffledQuizData[currentQuestion]; // Load from the randomized questions

	// Create question text
	const questionDiv = document.createElement("div");
	questionDiv.classList.add("question-box");

	const questionText = document.createElement("p");
	questionText.textContent = `${currentQuestion + 1}. ${data.question}`;
	questionDiv.appendChild(questionText);

	// Create answer buttons for options
	data.options.forEach((option, i) => {
		const button = document.createElement("button");
		button.textContent = option;
		button.classList.add("option-button");

		// Highlight the previously selected option (if any)
		if (userAnswers[currentQuestion] == i) {
			button.classList.add("selected"); // Add a selected class to show selection
		}

		// Set click event to capture the selected option
		button.addEventListener("click", (event) => {
			event.preventDefault(); // Prevent default form submission or page reload
			userAnswers[currentQuestion] = i; // Save user's selected answer
			// Remove 'selected' class from all buttons and apply it to the clicked one
			document
				.querySelectorAll(".option-button")
				.forEach((btn) => btn.classList.remove("selected"));
			button.classList.add("selected");
		});

		questionDiv.appendChild(button);
		questionDiv.appendChild(document.createElement("br")); // Line break between buttons
	});

	quizForm.appendChild(questionDiv);

	// Show "Home" button on the first question and hide the Previous button
	if (currentQuestion === 0) {
		document.getElementById("home-btn").style.display = "inline-block"; // Show Home button
		document.getElementById("prev-btn").style.display = "none"; // Hide Previous button
	} else {
		document.getElementById("home-btn").style.display = "none"; // Hide Home button
		document.getElementById("prev-btn").style.display = "inline-block"; // Show Previous button
	}

	// Show the Next button
	document.getElementById("next-btn").style.display = "inline-block";
}

// Function to start the quiz
function startQuiz() {
	shuffledQuizData = loadRandomQuestions(); // Load 30 random questions
	currentQuestion = 0;
	userAnswers = new Array(30); // Reset user answers
	loadQuestion(); // Load the first question

	// Show navigation buttons when the quiz starts
	document.getElementById("next-btn").style.display = "inline-block";
	document.getElementById("prev-btn").style.display = "none"; // Initially hide Previous button
	document.getElementById("home-btn").style.display = "none"; // Initially hide Home button
}

// Function to load the home page with instructions and "Start Quiz" button
function loadHomePage() {
	const quizForm = document.getElementById("quiz-form");
	quizForm.innerHTML = `
    <div class="home-box">
      <h2>Welcome to the Quiz!</h2>
      <p>This quiz consists of 30 randomly selected questions out of 200. Answer all the questions to the best of your ability.</p>
      <button id="start-quiz-btn">Start Quiz</button>
    </div>
  `;

	// Hide navigation buttons on the home page
	document.getElementById("next-btn").style.display = "none";
	document.getElementById("prev-btn").style.display = "none";
	document.getElementById("home-btn").style.display = "none"; // Hide Home button on the homepage

	// Attach event listener for the "Start Quiz" button after it's rendered
	document
		.getElementById("start-quiz-btn")
		.addEventListener("click", function () {
			startQuiz(); // Call the startQuiz function on click
		});
}

// Save user's answer and move to the next question
function nextQuestion() {
	currentQuestion++; // Increment question index
	if (currentQuestion < shuffledQuizData.length) {
		loadQuestion(); // Load the next question
	} else {
		showResult(); // Show results after the last question
	}
}

// Load previous question
function prevQuestion() {
	currentQuestion--; // Decrement question index
	loadQuestion(); // Load the previous question
}

// Show the result with a score and options to review answers or retake the quiz
function showResult() {
	let score = 0;

	// Calculate score
	shuffledQuizData.forEach((data, index) => {
		if (userAnswers[index] == data.correct) {
			score++;
		}
	});

	// Hide navigation buttons
	document.getElementById("next-btn").style.display = "none";
	document.getElementById("prev-btn").style.display = "none";

	// Display score and options for review
	const quizForm = document.getElementById("quiz-form");
	quizForm.innerHTML = `
    <div class="result-box">
      <h2>Your final score is: ${score} out of ${shuffledQuizData.length}</h2>
      <button id="review-all-btn">Review All</button>
      <button id="review-incorrect-btn">Review Incorrect Answers</button>
      <button id="review-correct-btn">Review Correct Answers</button>
      <button id="retake-btn">Retake Quiz</button>
      <button id="home-btn">Home</button>
    </div>
  `;

	document
		.getElementById("review-all-btn")
		.addEventListener("click", () => reviewQuestions("all"));
	document
		.getElementById("review-incorrect-btn")
		.addEventListener("click", () => reviewQuestions("incorrect"));
	document
		.getElementById("review-correct-btn")
		.addEventListener("click", () => reviewQuestions("correct"));
	document
		.getElementById("retake-btn")
		.addEventListener("click", () => retakeQuiz());
	document
		.getElementById("home-btn")
		.addEventListener("click", () => loadHomePage());
}

// Review function (all, incorrect, or correct answers)
function reviewQuestions(filter) {
	const quizForm = document.getElementById("quiz-form");
	quizForm.innerHTML = ""; // Clear the form

	let filteredQuestions = shuffledQuizData;

	if (filter === "incorrect") {
		filteredQuestions = shuffledQuizData.filter(
			(data, index) => userAnswers[index] != data.correct
		);
	} else if (filter === "correct") {
		filteredQuestions = shuffledQuizData.filter(
			(data, index) => userAnswers[index] == data.correct
		);
	}

	filteredQuestions.forEach((data, index) => {
		const questionDiv = document.createElement("div");
		questionDiv.classList.add("question-box");

		const questionText = document.createElement("p");
		questionText.textContent = `${index + 1}. ${data.question}`;
		questionDiv.appendChild(questionText);

		const userAnswer = userAnswers[shuffledQuizData.indexOf(data)];
		const correctAnswer = data.correct;

		const answerText = document.createElement("p");
		answerText.textContent = `Your answer: ${data.options[userAnswer]} (Correct answer: ${data.options[correctAnswer]})`;
		answerText.style.color = userAnswer == correctAnswer ? "green" : "red";
		questionDiv.appendChild(answerText);

		quizForm.appendChild(questionDiv);
	});

	// Add "Back to Result" button
	const backButton = document.createElement("button");
	backButton.textContent = "Back to Result";
	backButton.addEventListener("click", () => showResult());
	quizForm.appendChild(backButton);
}

// Retake quiz function
function retakeQuiz() {
	shuffledQuizData = loadRandomQuestions(); // Reload 30 random questions
	currentQuestion = 0;
	userAnswers = new Array(30); // Reset user answers
	loadQuestion(); // Load the first question

	// Show the navigation buttons when quiz starts
	document.getElementById("next-btn").style.display = "inline-block";
}

// Initialize the quiz by loading the home page
loadHomePage();

// Add Event Listeners for Next, Previous, and Home Buttons
document.getElementById("next-btn").addEventListener("click", (event) => {
	event.preventDefault(); // Prevent default button behavior
	nextQuestion(); // Call the function to move to the next question
});

document.getElementById("prev-btn").addEventListener("click", (event) => {
	event.preventDefault(); // Prevent default button behavior
	prevQuestion(); // Call the function to move to the previous question
});

document.getElementById("home-btn").addEventListener("click", (event) => {
	event.preventDefault();
	loadHomePage(); // Return to homepage
});
