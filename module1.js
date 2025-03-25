// Course content
const courseContent = {
    landingPage: {
        title: "The Chronarium's Clues: A Logic Adventure",
        image: "imgs/1.1.jpeg",
        text: "Welcome, Cadet! You've been selected for a special training mission at the Chronarium, the galaxy's foremost institute for temporal studies. Your first task? Master the art of logical reasoning. The fate of timelines might just depend on it!",
        buttonText: "Begin Training"
    },
    storyPage1: {
        title: "The Case of the Glitched Glitch - Part 1",
        image: "imgs/1.2.jpeg",
        story: `
            <p>Elara tapped her stylus against the shimmering Chronarium display, her brow furrowed. "Logi, look at this! The Kepler-186f timeline... it's unstable. Sensor logs show brief, contradictory flickers – building styles shifting mid-construction, historical figures momentarily appearing in anachronistic clothing, data logs swapping entries... It's like small paradoxes are cascading!"</p>
            
            <p>Logi, a sleek, chrome-plated robot with glowing blue optics, whirred softly. "Indeed, Cadet Elara. A 'Paradox Cascade,' as you term it. Initial analysis suggests a malfunction in their experimental time-dilation device, powered by the volatile element Chronium-X. If the source isn't identified and stabilized, the cumulative effect could decouple Kepler-186f from the primary timeline entirely. A significant risk."</p>
            
            <p>Elara took a breath, pulling up the primary directive flashing urgently on her console. "Okay, Logi, let's apply the rules step-by-step. Standard Temporal Doctrine, Rule Alpha states: '<strong>Premise 1: All confirmed Class-3 distortions originating within the Kepler sector are traceable to the Kepler-186f experimental device.</strong>' " She then pointed to the data log showing the secondary event. "And this minor flicker on Proxima Centauri b? The logs confirm it <em>is</em> classified as a Class-3 distortion, and Proxima b is definitely within the Kepler sector. So, that gives us <strong>Premise 2: The Proxima flicker is a Class-3 distortion originating within the Kepler sector.</strong>"</p>
        `,
        buttonText: "Continue"
    },
    storyPage2: {
        title: "The Case of the Glitched Glitch - Part 2",
        image: "imgs/1.3.jpeg",
        story: `
            <p>She traced the logical connection on her screen with her finger. "Okay, so <em>if</em> Premise 1 is true (that <em>all</em> these distortions trace back to the device) <em>and</em> Premise 2 is true (that the Proxima flicker <em>is</em> one of these distortions)... then the conclusion logically <em>must</em> follow. Therefore," she concluded, tapping Proxima b on the display, "<strong>this Proxima flicker <em>must</em> be traceable back to the Kepler-186f device.</strong> It has to be an echo or consequence. That's the necessary outcome if Rule Alpha and our data about the flicker are both correct."</p>
            
            <p>Logi tilted its head, optics brightening. "Precisely, Cadet. You have just demonstrated <strong>deductive reasoning</strong> perfectly. You started with a general premise covering <em>all</em> members of a specific category (Premise 1). You identified that the Proxima flicker is a specific instance belonging to that category (Premise 2). Therefore, you reached a conclusion about that specific instance (Conclusion) that <em>must</em> be true <em>if</em> your starting premises are accurate. That certainty, derived from the structure of the argument, is the core strength of valid deduction."</p>
            
            <p>"But wait," Elara zoomed in on a different sensor log, her eyes widening. "Logi, these five energy signatures... they <em>predate</em> the main Kepler event by several cycles! They're smaller, different, but the temporal resonance... it's uncannily similar. Rule Alpha says <em>all</em> distortions come from the device <em>after</em> it activated, but these came <em>before</em>! What if... based on these five specific instances... the problem isn't just the device suddenly malfunctioning, but a growing instability <em>leading up</em> to it?"</p>
        `,
        buttonText: "Continue"
    },
    storyPage3: {
        title: "The Case of the Glitched Glitch - Part 3",
        image: "imgs/1.4.jpeg",
        story: `
            <p>Logi's optics blinked. "Ah, you have identified data potentially conflicting with Rule Alpha. Your hypothesis, 'Based on these five instances, the problem might be larger,' uses <strong>inductive reasoning</strong>. You're observing specific events (the five signatures) and forming a broader, generalized conclusion or hypothesis. It's a <em>possible</em> explanation, suggested by the evidence, but it's not guaranteed to be correct, unlike a valid deductive conclusion derived from a true premise."</p>
            
            <p>Just then, a new alert pinged. "High-priority analysis!" Elara exclaimed, tapping the notification. "A deep-scan probe just finished analyzing the <em>earliest</em> of those five preceding fluctuations... and found trace amounts of decayed Chronium-X residue! That strengthens my inductive hypothesis, doesn't it? It suggests a link back to the <em>type</em> of energy source used in the Kepler device, even before the main cascade event!"</p>
            
            <p>"Indeed," Logi confirmed. "Finding Chronium-X residue significantly increases the <em>probability</em> that your inductive conclusion is correct. Think of induction like building a case with evidence. Each consistent piece of evidence – like finding the residue, or noting the similar resonance patterns in all five pre-cascade events – adds weight to your hypothesis. If we found ten more pre-cascade events, all with Chronium-X traces, your hypothesis would become <em>even stronger</em>. However, induction <em>never</em> reaches the 100% certainty of a sound deductive argument. There's always a possibility, however small, that a future observation could contradict it, or another explanation exists. Inductive strength is about likelihood and probability, built upon the quality and quantity of observations."</p>
        `,
        buttonText: "Continue"
    },
    storyPage4: {
        title: "The Case of the Glitched Glitch - Part 4",
        image: "imgs/1.5.jpeg",
        story: `
            <p>Elara frowned, considering the data. "Okay, so the inductive evidence points towards a growing instability linked to Chronium-X <em>before</em> the main device event. This contradicts Rule Alpha. But... what <em>caused</em> that initial instability? The device wasn't even fully active yet." She pulled up galactic incident reports. "Logi, look. The Zargonian Freight Guild had a mishap near Kepler just <em>before</em> the first fluctuation. They accidentally jettisoned experimental 'warp stabilizers'. Could <em>that</em> have destabilized the local spacetime, triggering the Chronium-X reactions?"</p>
            
            <p>Logi processed this. "An interesting alternative hypothesis, Cadet. You now have two potential explanations for the early fluctuations and residue: 1) An unknown inherent instability in Chronium-X itself, building over time. 2) An external trigger, like the Zargonian mishap, interacting with the Chronium-X. Both explanations seem <em>possible</em> given the current evidence. How do you decide which is more likely?"</p>
            
            <p>Elara thought aloud. "Well, the 'inherent instability' idea is simpler, it doesn't require an outside factor. But the Zargonian mishap lines up perfectly time-wise with the <em>start</em> of the fluctuations. That timing seems too coincidental to ignore. The Zargonian explanation seems... better, it accounts for <em>more</em> of the facts, especially the timing."</p>
            
            <p>"What you are performing now," Logi stated, "is <strong>abductive reasoning</strong>, also known as inference to the best explanation. You're not deducing from a rule or inducing from repetition; you're comparing different potential explanations for the <em>same set of facts</em> and choosing the one that provides the most plausible, coherent, or simplest account. You've judged the Zargonian explanation as 'best' based on its ability to explain the timing."</p>
        `,
        buttonText: "Continue"
    },
    storyPage5: {
        title: "The Case of the Glitched Glitch - Part 5",
        image: "imgs/1.6.jpeg",
        story: `
            <p>Logi continued, "Now, Cadet, based on all this analysis – the deductive certainty <em>if</em> Rule Alpha holds, the strong inductive evidence <em>against</em> Rule Alpha, and your abductive reasoning favouring the Zargonian trigger – what is your recommendation? Should we immediately send a containment team to Kepler-186f, or focus investigation efforts on the Zargonian incident?"</p>
            
            <p>Elara weighed the options. "Okay... Sending a team <em>now</em> based just on Rule Alpha seems wrong, given the inductive evidence (Reason 1). Investigating the Zargonians aligns with the 'best explanation' from abduction (Reason 2). Plus, direct intervention at Kepler could be risky if we don't understand the root cause (Reason 3). However, ignoring Kepler completely is dangerous given the ongoing cascade (Reason 4). So... weighing these points... I recommend prioritizing the Zargonian investigation <em>while</em> setting up remote, non-invasive monitoring around Kepler."</p>
            
            <p>"An excellent synthesis," Logi commended. "Your final step, weighing various independent reasons – some supporting one action, some supporting another, some acting as constraints – to arrive at a judgment or recommendation, is an example of <strong>conductive reasoning</strong>. It's common in practical decision-making, where you balance different pros and cons that don't necessarily form a strict deductive or inductive chain."</p>
            
            <p>Elara grinned, feeling her understanding deepen. "Wow. So it's not just about 'true or false'. Deduction gives certainty from rules, induction builds probability from evidence, abduction finds the best explanation, and conduction weighs different factors for a decision. To really solve temporal problems – or <em>any</em> complex problem – I need to use all of them!"</p>
            
            <p>"Precisely, Cadet," Logi confirmed. "Your training progresses well. Let's test your grasp of these diverse reasoning methods..."</p>
        `,
        buttonText: "Take the Quiz"
    },
    quizPage: {
        title: "Chronarium Logic Quiz - Module 1",
        instructions: "Choose the best answer for each question.",
        questions: [
            {
                text: "When Elara concluded that the Proxima flicker *must* be traceable to the Kepler device because of Rule Alpha and the flicker's classification, what type of reasoning was she primarily using?",
                options: [
                    "a) Inductive Reasoning (generalizing from examples)",
                    "b) Deductive Reasoning (applying a general rule to a specific case)",
                    "c) Abductive Reasoning (choosing the best explanation)",
                    "d) Conductive Reasoning (weighing pros and cons)"
                ],
                correctAnswer: 1 // b) Deductive Reasoning
            },
            {
                text: "According to Logi, what is the key feature of a valid *deductive* argument?",
                options: [
                    "a) It is based on many specific observations.",
                    "b) It offers the simplest explanation for the facts.",
                    "c) Its conclusion is highly probable but not guaranteed.",
                    "d) If its premises are true, its conclusion *must* be true."
                ],
                correctAnswer: 3 // d) If its premises are true, its conclusion *must* be true.
            },
            {
                text: "Elara's initial thought \"based on these five specific instances [the pre-cascade signatures]... the problem isn't just the device suddenly malfunctioning, but a growing instability\" is an example of:",
                options: [
                    "a) Inductive Reasoning",
                    "b) Deductive Reasoning",
                    "c) Abductive Reasoning",
                    "d) Conductive Reasoning"
                ],
                correctAnswer: 0 // a) Inductive Reasoning
            },
            {
                text: "How did finding Chronium-X residue from the *earliest* fluctuation affect Elara's hypothesis about a growing instability?",
                options: [
                    "a) It proved her hypothesis with 100% certainty (deduction).",
                    "b) It weakened her hypothesis by introducing a new element.",
                    "c) It increased the probability/strength of her hypothesis (induction).",
                    "d) It proved Rule Alpha was correct all along."
                ],
                correctAnswer: 2 // c) It increased the probability/strength of her hypothesis (induction).
            },
            {
                text: "When Elara compared the 'inherent Chronium-X instability' idea versus the 'Zargonian mishap' idea to explain the early fluctuations, what type of reasoning was she using to decide which was more likely?",
                options: [
                    "a) Inductive Reasoning",
                    "b) Deductive Reasoning",
                    "c) Abductive Reasoning",
                    "d) Conductive Reasoning"
                ],
                correctAnswer: 2 // c) Abductive Reasoning
            },
            {
                text: "Why did Elara lean towards the 'Zargonian mishap' as the *best* explanation for the early fluctuations?",
                options: [
                    "a) Because Rule Alpha demanded it.",
                    "b) Because it was the only possibility left.",
                    "c) Because it explained the specific timing of the events better than the alternative.",
                    "d) Because Logi told her it was correct."
                ],
                correctAnswer: 2 // c) Because it explained the specific timing of the events better than the alternative.
            },
            {
                text: "When Elara decided to recommend \"prioritizing the Zargonian investigation *while* setting up remote monitoring around Kepler,\" what reasoning process was she using, according to Logi?",
                options: [
                    "a) Inductive Reasoning (based on past successful investigations)",
                    "b) Deductive Reasoning (following a strict protocol)",
                    "c) Abductive Reasoning (finding the best single action)",
                    "d) Conductive Reasoning (balancing multiple independent factors/reasons)"
                ],
                correctAnswer: 3 // d) Conductive Reasoning
            },
            {
                text: "Conductive reasoning, as shown when Elara made her final recommendation, primarily involves:",
                options: [
                    "a) Applying a universal rule to a specific case.",
                    "b) Generalizing from a limited number of observations.",
                    "c) Weighing various pros and cons to make a practical judgment.",
                    "d) Finding the single most likely cause for an event."
                ],
                correctAnswer: 2 // c) Weighing various pros and cons to make a practical judgment.
            },
            {
                text: "Based on the story, which type of reasoning aims for a conclusion that is *necessarily* true if the premises are true?",
                options: [
                    "a) Inductive",
                    "b) Deductive",
                    "c) Abductive",
                    "d) Conductive"
                ],
                correctAnswer: 1 // b) Deductive
            },
            {
                text: "Which reasoning type involves comparing alternative hypotheses to see which one best accounts for the available evidence?",
                options: [
                    "a) Inductive",
                    "b) Deductive",
                    "c) Abductive",
                    "d) Conductive"
                ],
                correctAnswer: 2 // c) Abductive
            }
        ],
        feedbackText: {
            allCorrect: "Flawless reasoning, Cadet! You've mastered the fundamental types of logical inference. Your ability to distinguish deduction, induction, abduction, and conduction is impressive. Prepare for Module 2!",
            someIncorrect: "A good attempt, Cadet, but some distinctions need sharpening. Review the sections in the story where Logi explains each reasoning type and how you applied them to the Paradox Cascade. Clear thinking is crucial for temporal navigation!"
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
                <img src="${image}" alt="Chronarium story scene" class="page-image">
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
                <img src="${image}" alt="Chronarium story scene" class="page-image">
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
                <img src="${image}" alt="Chronarium story scene" class="page-image">
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
                <img src="${image}" alt="Chronarium story scene" class="page-image">
            </div>
            <div class="text-content">${story}</div>
            <div class="btn-container">
                <button class="btn" onclick="navigateTo('story5')">${buttonText}</button>
            </div>
        </div>
    `;
}

function renderStoryPage5() {
    const { title, image, story, buttonText } = courseContent.storyPage5;
    
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
                    <button class="btn" onclick="navigateTo('story1')">Review Story</button>
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
    
    // Update browser history to enable back button functionality
    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    window.history.pushState({ page: page }, '', url);
    
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
        case 'story5':
            content = renderStoryPage5();
            break;
        case 'quiz':
            content = renderQuizPage();
            break;
        default:
            content = renderLandingPage();
    }
    
    appContainer.innerHTML = content;
}

// Handle browser back/forward navigation
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        currentPage = event.state.page;
        renderApp();
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's a page parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    
    if (pageParam) {
        currentPage = pageParam;
    }
    
    // Initialize browser history state
    const url = new URL(window.location.href);
    url.searchParams.set('page', currentPage);
    window.history.replaceState({ page: currentPage }, '', url);
    
    renderApp();
});