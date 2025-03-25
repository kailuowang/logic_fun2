// Course content for Module 2
const courseContent = {
    landingPage: {
        title: "The Chronarium's Paradox: Validity, Soundness, and Shifty Arguments",
        image: "imgs/2_1.jpeg",
        text: "Cadet Elara, you've proven your grasp of basic reasoning! Now, we delve deeper into the structure of arguments. Learn to distinguish between *valid* arguments, *sound* arguments, and those sneaky traps called *fallacies*. The stability of the timeline depends on your sharp judgment!",
        buttonText: "Enter the Simulation"
    },
    storyPage: {
        title: "The Trial of Xylar",
        image: "imgs/2_2.jpeg",
        story: `
            <p>Elara and Logi entered the Chronarium's simulation chamber. A holographic courtroom materialized around them. "Today's lesson," Logi announced, "concerns the trial of Xylar, a smuggler accused of illegally transporting volatile Chronium-X."</p>
            
            <p>The prosecutor, a stern-looking being with four eyes, presented his case: "If Xylar transported Chronium-X, then his ship would have a unique energy signature. We detected that unique energy signature on Xylar's ship. Therefore, Xylar transported Chronium-X."</p>
            
            <p>Logi paused the simulation. "Cadet, is this argument <em>valid</em>?"</p>
            
            <p>Elara thought for a moment. "Well, if the premises were true, the conclusion <em>would</em> follow. It <em>seems</em> valid… but something feels off."</p>
            
            <p>Logi nodded. "It <em>is</em> deductively valid in its <em>structure</em>. But is it <em>sound</em>?"</p>
            
            <p>"For it to be sound," Elara said, "both premises would have to be <em>true</em>. But what if something <em>else</em> could cause that energy signature? Maybe Xylar's ship was framed!"</p>
            
            <p>Logi resumed the simulation. Xylar's defense attorney, a quick-witted robot, spoke: "The prosecutor's argument, while seemingly logical, commits a fallacy! It's like saying, 'If it rains, the ground is wet. The ground is wet. Therefore, it rained.' But the ground could be wet for other reasons! This is called <strong>affirming the consequent</strong>, a classic logical error."</p>
            
            <p>Elara snapped her fingers. "So, the argument's <em>structure</em> is okay, but the reasoning is flawed because the second premise doesn't guarantee the conclusion!"</p>
            
            <p>The defense attorney continued: "Furthermore, the prosecutor is a known enemy of my client! He hates Xylar! Therefore, everything he says is false!"</p>
            
            <p>Logi froze the simulation again. "Another fallacy, Cadet! Can you identify it?"</p>
            
            <p>Elara frowned. "That's an <strong>ad hominem</strong> attack! Attacking the prosecutor's character instead of addressing the actual argument. Whether the prosecutor likes Xylar or not has nothing to do with whether Xylar is guilty."</p>
            
            <p>The defense continued by making a claim: "There are only two possibilities. Either Xylar did it, or the Galactic patrol planted the evidence. The Galactic Patrol are heros, and would never do such a thing, therefore Xylar did it!"</p>
            
            <p>Logi asked Elara "And what fallacy is that?".</p>
            
            <p>Elara responded, "That is a <strong>false dilemma</strong>. It is possible, for example, that a rogue member of the Galactic Patrol may have been reponsible. More than two possiblities exist."</p>
            
            <p>Logi reactivated the simulation. The judge, a wise, ancient being, addressed the jury: "To reach a just verdict, you must assess both the <em>validity</em> and <em>soundness</em> of the arguments presented. A valid argument follows a correct logical structure, but a <em>sound</em> argument is both valid <em>and</em> based on true premises. Be wary of fallacies that try to deceive you!"</p>
            
            <p>Logi turned to Elara. "The trial of Xylar highlights the crucial difference between validity and soundness, and the dangers of logical fallacies. Now, let's test your knowledge..."</p>
        `,
        buttonText: "Take the Quiz"
    },
    quizPage: {
        title: "Chronarium Logic Quiz - Module 2",
        instructions: "Choose the best answer for each question.",
        questions: [
            {
                text: "A *valid* argument is one where:",
                options: [
                    "a) The premises are true.",
                    "b) The conclusion is true.",
                    "c) If the premises are true, the conclusion must be true.",
                    "d) The argument is convincing."
                ],
                correctAnswer: 2 // c) If the premises are true, the conclusion must be true.
            },
            {
                text: "A *sound* argument is one that is:",
                options: [
                    "a) Valid and popular.",
                    "b) Valid and has a true conclusion.",
                    "c) Valid and has true premises.",
                    "d) Presented by a good speaker."
                ],
                correctAnswer: 2 // c) Valid and has true premises.
            },
            {
                text: "\"If Xylar transported Chronium-X, his ship would have a unique energy signature. His ship has that signature. Therefore, he transported it.\" This argument is:",
                options: [
                    "a) Valid and sound.",
                    "b) Valid but potentially unsound.",
                    "c) Invalid and unsound.",
                    "d) Invalid but potentially sound."
                ],
                correctAnswer: 1 // b) Valid but potentially unsound.
            },
            {
                text: "\"The prosecutor hates Xylar, therefore everything he says is false.\" This is an example of:",
                options: [
                    "a) Affirming the consequent.",
                    "b) Denying the antecedent.",
                    "c) Ad hominem.",
                    "d) Straw man."
                ],
                correctAnswer: 2 // c) Ad hominem.
            },
            {
                text: "\"If it rains, the ground is wet. The ground is wet. Therefore, it rained.\" This is an example of:",
                options: [
                    "a) Affirming the consequent.",
                    "b) Denying the antecedent.",
                    "c) Ad hominem.",
                    "d) Appeal to authority."
                ],
                correctAnswer: 0 // a) Affirming the consequent.
            },
            {
                text: "\"Either Xylar transported the Chronium-X, or the Galactic Patrol planted the evidence as they are the only two options. They would never plant evidence. Therefore Xylar did it.\" This is an example of:",
                options: [
                    "a) Ad Hominem",
                    "b) False Dillema",
                    "c) Straw Man",
                    "d) Appeal to Authority."
                ],
                correctAnswer: 1 // b) False Dillema
            },
            {
                text: "Which of the following is the BEST way to determine if a deductive argument is sound?",
                options: [
                    "a) Check if the conclusion is popular.",
                    "b) Check if the argument is valid and if the premises are true.",
                    "c) Check if the person making the argument is trustworthy.",
                    "d) Check if the argument uses big words."
                ],
                correctAnswer: 1 // b) Check if the argument is valid and if the premises are true.
            },
            {
                text: "A Valid argument, with a true conclusion, but one false premise, is:",
                options: [
                    "a) Sound",
                    "b) Unsound",
                    "c) Both",
                    "d) Neither"
                ],
                correctAnswer: 1 // b) Unsound
            }
        ],
        feedbackText: {
            allCorrect: "Outstanding, Cadet! You've mastered the concepts of validity, soundness, and common fallacies. Prepare for your next mission in Module 3!",
            someIncorrect: "Not quite, Cadet. Review the story and the definitions of validity, soundness, and the fallacies. Pay close attention to the examples. The timeline needs your sharpest judgment!"
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
                <img src="${image}" alt="Chronarium module 2 scene" class="page-image">
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
                <img src="${image}" alt="Trial of Xylar scene" class="page-image">
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
                    <button class="btn" onclick="window.location.href='index.html'">Return to Module 1</button>
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