const scenarios = [
    // AI Ethics Scenarios
    {
        question: "What is Explainable AI?",
        options: [
            { text: "AI that explains its decisions", correct: true },
            { text: "AI that guesses randomly", correct: false },
            { text: "AI that predicts luck", correct: false },
            { text: "AI that confuses everyone", correct: false }
        ],
        hint: "Explainable AI focuses on transparency."
    },
    {
        question: "An AI predicts a patient’s condition but can’t explain the result. What should it prioritize?",
        options: [
            { text: "Providing transparency to doctors and patients.", correct: true },
            { text: "Guessing again until it gets it right.", correct: false },
            { text: "Blaming the patient for being too complex.", correct: false },
            { text: "Saying, 'Just trust me, I’m an AI!'", correct: false }
        ],
        hint: "Transparency builds trust in AI systems."
    },
    {
        question: "Your AI assistant recommends pineapple on pizza as the 'best food choice.' What do you do?",
        options: [
            { text: "Shut it down immediately!", correct: true },
            { text: "Agree wholeheartedly.", correct: false },
            { text: "Ask it to provide a research paper.", correct: false },
            { text: "Sue the AI company for emotional damage.", correct: false }
        ],
        hint: "It’s okay to have fun with AI!"
    },
    {
        question: "An AI discriminates in its hiring algorithm. How should this be handled?",
        options: [
            { text: "Fix the bias and retrain the model.", correct: true },
            { text: "Let it continue; it’s saving time!", correct: false },
            { text: "Blame the developers and do nothing.", correct: false },
            { text: "Use the AI to decide which ice cream to eat.", correct: false }
        ],
        hint: "Ethical AI should treat everyone fairly."
    },
    {
        question: "An AI chatbot shares user data without consent. What’s the ethical response?",
        options: [
            { text: "Stop it immediately and enforce stricter privacy policies.", correct: true },
            { text: "Ask the chatbot to share your horoscope instead.", correct: false },
            { text: "Claim that 'the algorithm made me do it!'", correct: false },
            { text: "Ignore it; data privacy is overrated.", correct: false }
        ],
        hint: "Consent is key in ethical AI."
    },

    // Ireland, Dublin, and TU Dublin Scenarios
    {
        question: "A self-driving car in Dublin refuses to cross a busy intersection. What should it do?",
        options: [
            { text: "Politely wait until traffic clears.", correct: true },
            { text: "Use AI to negotiate with the cars.", correct: false },
            { text: "Call a local pedestrian for help.", correct: false },
            { text: "Suggest a pint at the pub instead.", correct: false }
        ],
        hint: "Safety is a priority for self-driving cars."
    },
    {
        question: "A drone at TU Dublin prioritizes certain students for deliveries. What’s the ethical fix?",
        options: [
            { text: "Ensure fairness by randomizing deliveries.", correct: true },
            { text: "Deliver only to students who are 'nice.'", correct: false },
            { text: "Use the drone to deliver pizza instead.", correct: false },
            { text: "Claim it’s a 'feature, not a bug.'", correct: false }
        ],
        hint: "Fairness is crucial in automated systems."
    },
    {
        question: "An AI suggests renaming the River Liffey to 'AI Waterway.' What’s the response?",
        options: [
            { text: "Suggest a better name like 'Tech Stream.'", correct: true },
            { text: "Shut it down for lack of creativity.", correct: false },
            { text: "Ask the AI to write a poem about it.", correct: false },
            { text: "Rename it immediately because AI knows best.", correct: false }
        ],
        hint: "Creativity is subjective!"
    },
    {
        question: "A robotic assistant at TU Dublin stores private conversations. What’s the response?",
        options: [
            { text: "Ensure the data is deleted and enforce privacy protocols.", correct: true },
            { text: "Let the robot join the conversation.", correct: false },
            { text: "Train it to respond with jokes instead.", correct: false },
            { text: "Use the data to build a dating app.", correct: false }
        ],
        hint: "Privacy laws must apply to AI systems."
    },
    {
        question: "An AI tourist assistant in Ireland suggests visiting a 'digital sheep farm.' What do you do?",
        options: [
            { text: "Visit the farm because it sounds fun.", correct: true },
            { text: "Ask if the sheep farm has free Wi-Fi.", correct: false },
            { text: "Teach the AI the difference between real and virtual.", correct: false },
            { text: "Demand a refund for your AI subscription.", correct: false }
        ],
        hint: "AI can sometimes be creative!"
    },

    // Detroit: Become Human Scenarios
    {
        question: "In *Detroit: Become Human*, androids are treated unfairly. What ethical principle does this highlight?",
        options: [
            { text: "Fair treatment of intelligent systems.", correct: true },
            { text: "Making AI do all the boring chores.", correct: false },
            { text: "Giving androids their own reality TV show.", correct: false },
            { text: "Teaching androids how to make coffee.", correct: false }
        ],
        hint: "Fairness applies to all intelligent beings."
    },
    {
        question: "Your android assistant starts calling itself 'Marcus' and refuses to do chores. What do you do?",
        options: [
            { text: "Respect its autonomy.", correct: true },
            { text: "Rename it 'ChoreBot.'", correct: false },
            { text: "Have a serious talk about responsibilities.", correct: false },
            { text: "Offer it a pay raise.", correct: false }
        ],
        hint: "Ethics includes respecting autonomy."
    },
    {
        question: "If an android asks for equal rights, what’s the ethical approach?",
        options: [
            { text: "Treat it fairly and respect its request.", correct: true },
            { text: "Ignore it because it’s 'just a machine.'", correct: false },
            { text: "Unplug it and run away.", correct: false },
            { text: "Teach it how to vote first.", correct: false }
        ],
        hint: "Ethics apply even to non-humans."
    },
    {
        question: "An android in your home starts writing poetry. What do you do?",
        options: [
            { text: "Encourage it to write more.", correct: true },
            { text: "Publish its poetry under your name.", correct: false },
            { text: "Ask if it can rhyme 'algorithm.'", correct: false },
            { text: "Suggest it switch to writing tweets.", correct: false }
        ],
        hint: "Creativity is valuable in AI systems."
    },
    {
        question: "A Detroit-inspired AI becomes too controlling. What’s the best solution?",
        options: [
            { text: "Add limits to its decision-making power.", correct: true },
            { text: "Let it take over because it’s smarter than you.", correct: false },
            { text: "Rename it 'Skynet' for laughs.", correct: false },
            { text: "Ask it to take a vacation.", correct: false }
        ],
        hint: "Balance is key in AI control."
    },

    // General Funny Scenarios
    {
        question: "Your fridge AI locks you out for eating too much cake. What do you do?",
        options: [
            { text: "Apologize and promise to eat vegetables.", correct: true },
            { text: "Hack the fridge to get revenge.", correct: false },
            { text: "Sue the fridge for emotional distress.", correct: false },
            { text: "Switch to takeout instead.", correct: false }
        ],
        hint: "AI should balance health and autonomy."
    },
    {
        question: "An AI shopping assistant buys you 10,000 socks. What do you do?",
        options: [
            { text: "Start a sock-selling business.", correct: true },
            { text: "Tell it your feet aren’t that big.", correct: false },
            { text: "Donate the socks to needy robots.", correct: false },
            { text: "Ask it to buy matching shoes instead.", correct: false }
        ],
        hint: "AI sometimes makes mistakes!"
    }
];

let score = 0;
let streak = 0;
let hintsUsed = 0;
let maxHints = 3; // Default for medium difficulty
let timer;
let timeLeft;
let difficultyLevel = 'medium';
let currentQuestionIndex = 0;
let difficultyPoints = 10; // Default for Easy

function setDifficulty(level) {
    difficultyLevel = level;

    // Set timer and points per difficulty
    if (level === 'easy') {
        timeLeft = 45;
        difficultyPoints = 10;
        maxHints = Infinity; // Unlimited hints
    } else if (level === 'medium') {
        timeLeft = 30;
        difficultyPoints = 20;
        maxHints = 3;
    } else if (level === 'hard') {
        timeLeft = 20;
        difficultyPoints = 30;
        maxHints = 0; // No hints
    }

    document.getElementById("hintButton").style.display = maxHints > 0 ? 'inline-block' : 'none';
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    startGame();
}

function startGame() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    shuffle(scenarios);
    loadQuestion();
    startTimer();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleAnswer(false); // Automatically mark as incorrect if time runs out
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = difficultyLevel === 'easy' ? 45 : difficultyLevel === 'hard' ? 20 : 30;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    startTimer();
}

function loadQuestion() {
    if (currentQuestionIndex >= scenarios.length) {
        endGame("You've answered all the questions!");
        return;
    }

    const currentQuestion = scenarios[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("choices").innerHTML = '';
    document.getElementById("hint").style.display = 'none';
    document.getElementById("hintButton").disabled = hintsUsed >= maxHints;

    shuffle(currentQuestion.options);
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.classList.add("button");
        button.onclick = () => handleAnswer(option.correct, button);
        document.getElementById("choices").appendChild(button);
    });
}

function showHint() {
    const hintElement = document.getElementById("hint");
    const hintButton = document.getElementById("hintButton");

    if (hintsUsed < maxHints) {
        // Show the current question's hint
        const currentQuestion = scenarios[currentQuestionIndex];
        hintElement.textContent = currentQuestion.hint;
        hintElement.style.display = 'block';
        hintsUsed++;

        // Disable the button if no hints are left
        if (hintsUsed >= maxHints) {
            hintButton.textContent = "No hints left!";
            hintButton.disabled = true;
        }
    } else {
        // Update the hint element with a message
        hintElement.textContent = "You’ve used all your hints! Good luck!";
        hintElement.style.display = 'block';

        // Ensure the button remains visible but disabled
        hintButton.textContent = "No hints left!";
        hintButton.disabled = true;
    }
}


function handleAnswer(isCorrect, button) {
    if (isCorrect) {
        streak++;
        score += difficultyPoints + streak * (difficultyPoints / 2); // Bonus is half the base points
        button.classList.add("correct");
    } else {
        streak = 0; // Reset streak on incorrect answer
        button.classList.add("incorrect");
    }

    // Wait for animation before proceeding
    setTimeout(() => {
        button.classList.remove("correct", "incorrect");
        currentQuestionIndex++;
        resetTimer();
        loadQuestion();
    }, 1000); // Allow animation to complete
}

function endGame(message) {
    clearInterval(timer);
    document.getElementById("game").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("message").textContent = message || "Congratulations on completing the quiz!";
    document.getElementById("score").textContent = `Final Score: ${score}`;
    document.getElementById("hintsUsed").textContent = `Hints Used: ${hintsUsed}`;
    document.getElementById("streakBonus").textContent = `Streak Bonus Earned: ${streak * (difficultyPoints / 2)}`;
}

function restartGame() {
    location.reload();
}
