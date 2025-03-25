// Course content
const courseContent = {
    landingPage: {
        title: "The Chronarium's Clues: A Logic Adventure",
        image: "imgs/1_1.jpeg",
        text: "Welcome, Cadet! You've been selected for a special training mission at the Chronarium, the galaxy's foremost institute for temporal studies. Your first task? Master the art of logical reasoning. The fate of timelines might just depend on it!",
        buttonText: "Begin Training"
    },
    storyPage: {
        title: "The Case of the Glitched Glitch",
        image: "imgs/1_2.jpeg",
        story: `
            <p>Elara tapped her stylus against the shimmering Chronarium display. "Logi, this temporal anomaly… it's bizarre. The timeline is showing a 'glitch within a glitch' – a paradox layered on top of a paradox!"</p>
            
            <p>Logi, a sleek, chrome-plated robot with glowing blue optics, whirred softly. "Indeed, Cadet Elara. Our sensors detected a disruption in the Kepler-186f colony timeline, Year 2347. Specifically, a malfunction in their experimental time-dilation device."</p>
            
            <p>Elara frowned. "But the reports are contradictory. One sensor log says *all* temporal distortions originate from Kepler-186f. And *if* all distortions originate there, then the secondary glitch on Proxima Centauri b *must* be a consequence. That seems… solid. Like, it *has* to be true."</p>
            
            <p>Logi tilted its head. "That, Cadet, is an example of <strong>deductive reasoning</strong>. You're starting with a general rule (all distortions originate from Kepler-186f) and applying it to a specific case (the Proxima Centauri b glitch). If the general rule is true, the conclusion *must* also be true."</p>
            
            <p>Elara nodded. "Okay, I get that. But then there's this other report. It shows five separate instances of minor temporal fluctuations *preceding* the Kepler-186f event. The analyst wrote, 'Based on these five instances, we believe temporal instability is increasing across the sector.'"</p>
            
            <p>Logi's optics blinked. "That is <strong>inductive reasoning</strong>, Cadet. The analyst is drawing a general conclusion (instability is increasing) from specific observations (the five fluctuations). It's a *probable* conclusion, but not a *certain* one. There might be other explanations for those fluctuations, or they could be unrelated."</p>
            
            <p>Elara pointed to a new alert flashing on the screen. "Another report! It says a team investigated the Proxima Centauri b glitch and found traces of… Chronium-X residue? That's the substance that powers the Kepler-186f device!"</p>
            
            <p>"Interesting," Logi mused. "If further investigation confirms Chronium-X residue *at every* subsequent glitch location, we could strengthen the *inductive* conclusion that the Kepler-186f device is the source. We'd have more evidence, making the conclusion more likely, but still not 100% certain. There is a big difference between certainty, and likelyhood."</p>
            
            <p>Elara grinned. "So, to solve this 'glitch within a glitch,' I need to use both deductive *and* inductive reasoning? Like a temporal detective?"</p>
            
            <p>Logi's optics glowed brighter. "Precisely, Cadet. Your training begins now. Let's test your understanding..."</p>
        `,
        buttonText: "Take the Quiz"
    },
    quizPage: {
        title: "Chronarium Logic Quiz - Module 1",
        instructions: "Choose the best answer for each question.",
        questions: [
            {
                text: "Elara states: \"If all temporal distortions originate from Kepler-186f, then the Proxima Centauri b glitch must be a consequence.\" What type of reasoning is this?",
                options: [
                    "a) Inductive Reasoning",
                    "b) Deductive Reasoning",
                    "c) Abductive Reasoning",
                    "d) Conductive Reasoning"
                ],
                correctAnswer: 1 // b) Deductive Reasoning (0-indexed)
            },
            {
                text: "The analyst observes five temporal fluctuations and concludes that temporal instability is increasing. What type of reasoning is this?",
                options: [
                    "a) Deductive Reasoning",
                    "b) Abductive Reasoning",
                    "c) Inductive Reasoning",
                    "d) Conductive Reasoning"
                ],
                correctAnswer: 2 // c) Inductive Reasoning
            },
            {
                text: "Deductive reasoning guarantees the conclusion is true if:",
                options: [
                    "a) The conclusion is popular.",
                    "b) The premises are popular.",
                    "c) The premises are true.",
                    "d) The conclusion is about the future."
                ],
                correctAnswer: 2 // c) The premises are true.
            },
            {
                text: "Inductive reasoning guarantees the conclusion is true if:",
                options: [
                    "a) The premises are numerous.",
                    "b) Never - the conclusion is only ever probable.",
                    "c) The premises are about science.",
                    "d) The conclusion is exciting."
                ],
                correctAnswer: 1 // b) Never - the conclusion is only ever probable.
            },
            {
                text: "If further investigation finds Chronium-X at *every* glitch site, this would:",
                options: [
                    "a) Prove the Kepler-186f device is the *definite* cause, beyond any doubt.",
                    "b) Make the conclusion that the Kepler-186f device is the cause *more probable*.",
                    "c) Make the conclusion that the Kepler-186f device is the cause *less probable*.",
                    "d) Have no impact on the conclusion."
                ],
                correctAnswer: 1 // b) Make the conclusion that the Kepler-186f device is the cause *more probable*.
            },
            {
                text: "Which statement best describes the difference between deductive and inductive reasoning?",
                options: [
                    "a) Deductive reasoning is used by scientists, while inductive reasoning is used by detectives.",
                    "b) Deductive reasoning moves from general principles to specific conclusions, while inductive reasoning moves from specific observations to general conclusions.",
                    "c) Deductive reasoning is always correct, while inductive reasoning is always incorrect.",
                    "d) Deductive reasoning is about the past, while inductive reasoning is about the future."
                ],
                correctAnswer: 1 // b) Deductive reasoning moves from general principles to specific conclusions...
            },
            {
                text: "All squares are rectangles. All Rectangles are 4 sided shapes. Therefore, all squares are 4 sided shapes. What type of Reasoning is this?",
                options: [
                    "a) Inductive",
                    "b) Deductive",
                    "c) Abductive",
                    "d) Reductive"
                ],
                correctAnswer: 1 // b) Deductive
            },
            {
                text: "Every cat I have ever met, hisses. Therefore all cats hiss. What type of reasoning is this?",
                options: [
                    "a) Inductive",
                    "b) Deductive",
                    "c) Abductive",
                    "d) Reductive"
                ],
                correctAnswer: 0 // a) Inductive
            }
        ],
        feedbackText: {
            allCorrect: "Excellent work, Cadet Elara! You've mastered the basics of deductive and inductive reasoning. Proceed to Module 2!",
            someIncorrect: "Good effort, Cadet! Review the story and try again. Pay close attention to the differences between deductive and inductive arguments."
        },
        buttonText: "Submit Answers"
    }
};

// Application state
let currentPage = 'landing';
let selectedAnswers = new Array(courseContent.quizPage.questions.length).fill(null);
let quizSubmitted = false;

// Render functions
function renderLandingPage() {
    const { title, image, text, buttonText } = courseContent.landingPage;
    
    return `
        <div class="page">
            <h1 class="page-title">${title}</h1>
            <div class="image-container">
                <img src="${image}" alt="Chronarium scene" class="page-image">
            </div>
            <div class="text-content">${text}</div>
            <div class="btn-container">
                <button class="btn" onclick="navigateTo('story')">${buttonText}</button>
            </div>
        </div>
    `;
}

function renderStoryPage() {
    const { title, image, story, buttonText } = courseContent.storyPage;
    
    return `
        <div class="page">
            <h1 class="page-title">${title}</h1>
            <div class="image-container">
                <img src="${image}" alt="Chronarium story scene" class="page-image">
            </div>
            <div class="text-content">${story}</div>
            <div class="btn-container">
                <button class="btn" onclick="navigateTo('quiz')">${buttonText}</button>
            </div>
        </div>
    `;
}

function renderQuizPage() {
    const { title, instructions, questions, buttonText } = courseContent.quizPage;
    
    let questionsHTML = questions.map((question, qIndex) => {
        let optionsHTML = question.options.map((option, oIndex) => {
            const selectedClass = selectedAnswers[qIndex] === oIndex ? 'selected' : '';
            return `<div class="option ${selectedClass}" onclick="selectAnswer(${qIndex}, ${oIndex})">${option}</div>`;
        }).join('');
        
        return `
            <div class="question">
                <p><strong>${qIndex + 1}. ${question.text}</strong></p>
                <div class="options">
                    ${optionsHTML}
                </div>
            </div>
        `;
    }).join('');
    
    let feedbackHTML = '';
    if (quizSubmitted) {
        const score = calculateScore();
        const allCorrect = score === questions.length;
        const feedbackClass = allCorrect ? 'success' : 'partial';
        const feedbackMessage = allCorrect 
            ? courseContent.quizPage.feedbackText.allCorrect 
            : courseContent.quizPage.feedbackText.someIncorrect;
        
        feedbackHTML = `
            <div class="feedback ${feedbackClass}">
                <p>${feedbackMessage}</p>
                <p>Score: ${score}/${questions.length}</p>
            </div>
        `;
        
        // Add review button if score isn't perfect
        if (!allCorrect) {
            feedbackHTML += `
                <div class="btn-container">
                    <button class="btn" onclick="resetQuiz()">Try Again</button>
                    <button class="btn" onclick="navigateTo('story')">Review Story</button>
                </div>
            `;
        } else {
            feedbackHTML += `
                <div class="btn-container">
                    <button class="btn" onclick="window.location.href='module2.html'">Go to Module 2</button>
                </div>
            `;
        }
    }
    
    return `
        <div class="page">
            <h1 class="page-title">${title}</h1>
            <p>${instructions}</p>
            <div class="quiz-container">
                ${questionsHTML}
            </div>
            ${feedbackHTML}
            ${!quizSubmitted ? `
                <div class="btn-container">
                    <button class="btn" onclick="submitQuiz()">${buttonText}</button>
                </div>
            ` : ''}
        </div>
    `;
}

// Navigation and interaction functions
function navigateTo(page) {
    currentPage = page;
    renderApp();
}

function selectAnswer(questionIndex, optionIndex) {
    if (quizSubmitted) return;
    
    selectedAnswers[questionIndex] = optionIndex;
    renderApp();
}

function submitQuiz() {
    // Check if all questions have been answered
    if (selectedAnswers.includes(null)) {
        alert('Please answer all questions before submitting.');
        return;
    }
    
    quizSubmitted = true;
    renderApp();
}

function resetQuiz() {
    selectedAnswers = new Array(courseContent.quizPage.questions.length).fill(null);
    quizSubmitted = false;
    renderApp();
}

function calculateScore() {
    return courseContent.quizPage.questions.reduce((score, question, index) => {
        return score + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
}

// Main render function
function renderApp() {
    const appContainer = document.getElementById('app');
    
    let content = '';
    switch (currentPage) {
        case 'landing':
            content = renderLandingPage();
            break;
        case 'story':
            content = renderStoryPage();
            break;
        case 'quiz':
            content = renderQuizPage();
            break;
        default:
            content = renderLandingPage();
    }
    
    appContainer.innerHTML = content;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', renderApp);