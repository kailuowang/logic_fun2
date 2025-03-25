// Course content for Module 2
const courseContent = {
    landingPage: {
        title: "The Chronarium's Paradox: Validity, Soundness, and Shifty Arguments",
        image: "imgs/2.1.jpeg",
        text: "Cadet Elara, you've proven your grasp of basic reasoning! Now, we delve deeper into the structure of arguments. Learn to distinguish between *valid* arguments, *sound* arguments, and those sneaky traps called *fallacies*. The stability of the timeline depends on your sharp judgment!",
        buttonText: "Enter the Simulation"
    },
    storyPage1: {
        title: "The Trial of Xylar - Part 1",
        image: "imgs/2.2.jpeg",
        story: `
            <p>Elara and Logi entered the Chronarium's simulation chamber. A holographic courtroom materialized around them. "Today's lesson," Logi announced, "concerns the trial of Xylar, a smuggler accused of illegally transporting volatile Chronium-X."</p>
            
            <p>The prosecutor, a stern-looking being with four eyes, presented his case: "Argument one: If Xylar transported Chronium-X, then his ship would have a unique energy signature. We detected that unique energy signature on Xylar's ship. Therefore, Xylar transported Chronium-X."</p>
            
            <p><strong>The prosecutor continued, pacing before the holographic jury.</strong> "Argument two: Furthermore, consider this: If Xylar were innocent of <em>this specific crime</em>, his ship's navigational logs from the time of the alleged smuggling would be perfectly clean, showing routine travel. But forensic analysis reveals significant deletions and suspicious rerouting attempts during that exact period! His logs are <em>not</em> perfectly clean. The conclusion is undeniable: Xylar is <em>not</em> innocent of this crime!"</p>
            
            <p>Logi paused the simulation again. "Two arguments presented, Cadet. Let's analyze the second one first. 'If innocent, then clean logs. Not clean logs. Therefore, not innocent.' Is this argument <em>valid</em>?"</p>
            
            <p>Elara focused. "Okay, premise one: If innocent (P), then clean logs (Q). Premise two: Not clean logs (Not Q). Conclusion: Not innocent (Not P). That structure... 'If P then Q, Not Q, therefore Not P'... Yes, that's a valid structure! If those premises were true, the conclusion would have to follow."</p>
        `,
        buttonText: "Continue"
    },
    storyPage2: {
        title: "The Trial of Xylar - Part 2",
        image: "imgs/2.3.jpeg",
        story: `
            <p>"Excellent identification of the valid structure, known as Modus Tollens," Logi confirmed. "But validity isn't everything. Is the argument <em>sound</em>?"</p>
            
            <p>Elara tapped her chin. "For it to be sound, both premises must be true. We know from the report that the logs aren't clean, so premise two might be true. But premise one... 'If innocent, then clean logs.' Is that <em>necessarily</em> true? What if Xylar deleted logs related to something <em>else</em> embarrassing but legal? Or maybe the log system just malfunctioned? An innocent person might not have perfectly clean logs for various reasons. That first premise seems shaky, possibly false."</p>
            
            <p>"Precisely," said Logi. "The argument has a valid <em>form</em>, but because the first premise ('If innocent, then clean logs') is questionable and not guaranteed to be true, the argument is likely <em>unsound</em>. Now, let's consider the prosecutor's first argument again..."</p>
            
            <p>Logi rewound slightly. "Argument one: 'If Xylar transported Chronium-X, then his ship would have a unique energy signature. We detected that unique energy signature on Xylar's ship. Therefore, Xylar transported Chronium-X.'"</p>
            
            <p>Logi paused. "Is <em>this</em> first argument valid?"</p>
            
            <p>Elara thought for a moment. "The structure is 'If P then Q. Q. Therefore P.' Wait... that doesn't seem right. Just because the signature is there doesn't <em>guarantee</em> the Chronium-X caused it, right?"</p>
        `,
        buttonText: "Continue"
    },
    storyPage3: {
        title: "The Trial of Xylar - Part 3",
        image: "imgs/2.4.jpeg",
        story: `
            <p>Logi nodded. "Correct. That structure is <em>invalid</em>. It's a common fallacy called <strong>affirming the consequent</strong>. Now let's see how the defense responds."</p>
            
            <p>Logi resumed the simulation. Xylar's defense attorney, a quick-witted robot, spoke: "The prosecutor's arguments are full of holes! His first point about the energy signature commits the fallacy of <strong>affirming the consequent</strong>! It's like saying, 'If it rains, the ground is wet. The ground is wet. Therefore, it rained.' But the ground could be wet for other reasons! Similarly, that energy signature could have another cause. His second argument about the logs, while having a technically valid structure, rests on the flimsy assumption that only guilt can explain imperfect logs – a premise we contest!"</p>
            
            <p>The defense attorney continued: "Furthermore, the prosecutor is a known rival of my client! He despises Xylar! You cannot trust a word this biased individual says!"</p>
            
            <p>Logi froze the simulation again. "Another tactic, Cadet! What's happening here?"</p>
            
            <p>Elara frowned. "That's an <strong>ad hominem</strong> attack! Attacking the prosecutor's character and alleged bias instead of addressing the actual evidence or arguments about the signature and the logs."</p>
        `,
        buttonText: "Continue"
    },
    storyPage4: {
        title: "The Trial of Xylar - Part 4",
        image: "imgs/2.5.jpeg",
        story: `
            <p>The defense continued by making a claim: "There are only two possibilities in this sector. Either Xylar did it, or the notoriously clumsy Zargonian Freight Guild accidentally jettisoned the Chronium-X near his flight path. The Zargonians mess up <em>all the time</em>, it's far more likely they did it! Therefore, Xylar is innocent!"</p>
            
            <p>Logi asked Elara "And what fallacy might be lurking here?".</p>
            
            <p>Elara responded, "That sounds like a <strong>false dilemma</strong>. Are those <em>really</em> the only two possibilities? Couldn't someone else entirely be involved? He's trying to force a choice between just two options."</p>
            
            <p>Logi reactivated the simulation. The judge, a wise, ancient being, addressed the jury: "To reach a just verdict, you must assess both the <em>validity</em> and <em>soundness</em> of the arguments presented. A valid argument follows a correct logical structure, but a <em>sound</em> argument is both valid <em>and</em> based on true premises. Be wary of fallacies like affirming the consequent, ad hominem attacks, and false dilemmas that try to deceive you!"</p>
            
            <p>Logi turned to Elara. "The trial of Xylar highlights the crucial difference between validity and soundness, and the dangers of logical fallacies. Now, let's test your knowledge..."</p>
        `,
        buttonText: "Take the Quiz"
    },
    quizPage: {
        title: "Chronarium Logic Quiz - Module 2",
        instructions: "Choose the best answer for each question.",
        questions: [
            {
                text: "Logi and Elara discussed that a *valid* argument is one where:",
                options: [
                    "a) All the premises are definitely true.",
                    "b) The conclusion feels intuitively correct.",
                    "c) If the premises are true, the conclusion *must* logically follow.",
                    "d) It successfully persuades the audience."
                ],
                correctAnswer: 2 // c) If the premises are true, the conclusion *must* logically follow.
            },
            {
                text: "What two conditions must be met for an argument to be *sound*?",
                options: [
                    "a) It must be interesting and have a true conclusion.",
                    "b) It must be valid and have all true premises.",
                    "c) It must avoid fallacies and be presented clearly.",
                    "d) It must use deductive reasoning and have at least one true premise."
                ],
                correctAnswer: 1 // b) It must be valid and have all true premises.
            },
            {
                text: "Consider the prosecutor's *second* argument: \"If Xylar were innocent, his logs would be clean. His logs are not clean. Therefore, Xylar is not innocent.\" How did Elara evaluate this argument?",
                options: [
                    "a) Invalid and unsound.",
                    "b) Invalid but potentially sound.",
                    "c) Valid but potentially unsound (because the first premise might be false).",
                    "d) Valid and definitely sound."
                ],
                correctAnswer: 2 // c) Valid but potentially unsound (because the first premise might be false).
            },
            {
                text: "The prosecutor's *first* argument was: \"If Xylar transported Chronium-X, his ship would have a unique signature. His ship has that signature. Therefore, he transported it.\" The defense attorney (and Elara) identified this structure (\"If P then Q. Q. Therefore P.\") as:",
                options: [
                    "a) A sound argument.",
                    "b) A valid argument called Modus Tollens.",
                    "c) An invalid argument committing the fallacy of Affirming the Consequent.",
                    "d) An inductive argument based on sensor readings."
                ],
                correctAnswer: 2 // c) An invalid argument committing the fallacy of Affirming the Consequent.
            },
            {
                text: "When the defense attorney shouted, \"The prosecutor is a known rival of my client! He despises Xylar! You cannot trust a word this biased individual says!\", what fallacy was being committed?",
                options: [
                    "a) False Dilemma",
                    "b) Affirming the Consequent",
                    "c) Ad Hominem",
                    "d) Appeal to Authority"
                ],
                correctAnswer: 2 // c) Ad Hominem
            },
            {
                text: "The defense attorney later argued: \"Either Xylar did it, or the notoriously clumsy Zargonian Freight Guild accidentally jettisoned the Chronium-X... It's far more likely they did it! Therefore, Xylar is innocent!\" This presents which potential fallacy?",
                options: [
                    "a) Ad Hominem (attacking the Zargonians)",
                    "b) False Dilemma (presenting only two options when others might exist)",
                    "c) Denying the Antecedent",
                    "d) Straw Man (misrepresenting the prosecution's case)"
                ],
                correctAnswer: 1 // b) False Dilemma
            },
            {
                text: "Why did Elara specifically question the *soundness* (not the validity) of the prosecutor's second argument about the ship's logs?",
                options: [
                    "a) Because the argument structure (Modus Tollens) was invalid.",
                    "b) Because she believed the conclusion (\"Xylar is not innocent\") was false.",
                    "c) Because she doubted the absolute truth of the premise \"If innocent, then clean logs.\"",
                    "d) Because the prosecutor used an Ad Hominem fallacy earlier."
                ],
                correctAnswer: 2 // c) Because she doubted the absolute truth of the premise "If innocent, then clean logs."
            },
            {
                text: "If a deductive argument is *valid*, but you discover its conclusion is actually *false*, what else *must* be true about the argument?",
                options: [
                    "a) The argument must have actually been inductive.",
                    "b) At least one of the premises must be false.",
                    "c) The argument structure must have been invalid after all.",
                    "d) Logic simply failed in this case."
                ],
                correctAnswer: 1 // b) At least one of the premises must be false.
            },
            {
                text: "What is the primary difference between evaluating an argument for *validity* versus evaluating it for *soundness*?",
                options: [
                    "a) Validity applies to induction, soundness applies to deduction.",
                    "b) Validity checks the truth of the premises, soundness checks the conclusion.",
                    "c) Validity checks the logical structure, soundness checks BOTH structure AND the truth of the premises.",
                    "d) Validity is objective, while soundness is subjective."
                ],
                correctAnswer: 2 // c) Validity checks the logical structure, soundness checks BOTH structure AND the truth of the premises.
            },
            {
                text: "The defense attorney's example, \"If it rains, the ground is wet. The ground is wet. Therefore, it rained,\" was used to illustrate which specific logical error?",
                options: [
                    "a) Ad Hominem",
                    "b) False Dilemma",
                    "c) Modus Tollens",
                    "d) Affirming the Consequent"
                ],
                correctAnswer: 3 // d) Affirming the Consequent
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
                <button class="btn" onclick="navigateTo('story1')">${buttonText}</button>
            </div>
        </div>
    `;
}

function renderStoryPage1() {
    const { title, image, story, buttonText } = courseContent.storyPage1;
    
    return `
        <div class="page">
            <h1 class="page-title">${title}</h1>
            <div class="image-container">
                <img src="${image}" alt="Trial of Xylar scene" class="page-image">
            </div>
            <div class="text-content">${story}</div>
            <div class="btn-container">
                <button class="btn" onclick="navigateTo('story2')">${buttonText}</button>
            </div>
        </div>
    `;
}

function renderStoryPage2() {
    const { title, image, story, buttonText } = courseContent.storyPage2;
    
    return `
        <div class="page">
            <h1 class="page-title">${title}</h1>
            <div class="image-container">
                <img src="${image}" alt="Trial of Xylar scene" class="page-image">
            </div>
            <div class="text-content">${story}</div>
            <div class="btn-container">
                <button class="btn" onclick="navigateTo('story3')">${buttonText}</button>
            </div>
        </div>
    `;
}

function renderStoryPage3() {
    const { title, image, story, buttonText } = courseContent.storyPage3;
    
    return `
        <div class="page">
            <h1 class="page-title">${title}</h1>
            <div class="image-container">
                <img src="${image}" alt="Trial of Xylar scene" class="page-image">
            </div>
            <div class="text-content">${story}</div>
            <div class="btn-container">
                <button class="btn" onclick="navigateTo('story4')">${buttonText}</button>
            </div>
        </div>
    `;
}

function renderStoryPage4() {
    const { title, image, story, buttonText } = courseContent.storyPage4;
    
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
                    <button class="btn" onclick="navigateTo('story1')">Review Story</button>
                </div>
            `;
        } else {
            feedbackHTML += `
                <div class="btn-container">
                    <button class="btn" onclick="window.location.href='module1.html'">Return to Module 1</button>
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
        case 'story1':
            content = renderStoryPage1();
            break;
        case 'story2':
            content = renderStoryPage2();
            break;
        case 'story3':
            content = renderStoryPage3();
            break;
        case 'story4':
            content = renderStoryPage4();
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