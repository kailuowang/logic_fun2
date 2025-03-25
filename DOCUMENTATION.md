# Chronarium Logic Course - Development Documentation

## Overview

The Chronarium Logic Course is an interactive web application designed to teach logical reasoning concepts through engaging storytelling and interactive quizzes. The application follows a modular structure where each module focuses on specific logic concepts:

- **Module 1**: Deductive and Inductive Reasoning
- **Module 2**: Validity, Soundness, and Logical Fallacies

The application is built using vanilla HTML, CSS, and JavaScript without any external libraries or frameworks, making it lightweight and easy to deploy.

## Project Structure

```
/
├── index.html            # Main landing page with module navigation
├── styles.css            # Shared styles for all pages
├── module1.html          # Module 1 HTML container
├── module1.js            # Module 1 content and functionality
├── module2.html          # Module 2 HTML container
├── module2.js            # Module 2 content and functionality
├── imgs/                 # Images directory
│   ├── 1_1.jpeg          # Module 1 landing page image
│   ├── 1_2.jpeg          # Module 1 story page image
│   ├── 2_1.jpeg          # Module 2 landing page image
│   └── 2_2.jpeg          # Module 2 story page image
├── module1.md            # Original content for Module 1
├── module2.md            # Original content for Module 2
└── DOCUMENTATION.md      # This documentation file
```

## Application Architecture

The application follows a simple, modular architecture:

1. **Landing Page (index.html)**: Provides an overview of the course and navigation to each module
2. **Module Pages (moduleX.html)**: Container pages that load the JavaScript for each module
3. **Module Scripts (moduleX.js)**: Contains all content and functionality for each module
4. **Shared Styles (styles.css)**: Common styling for all pages

### Page Structure Within Each Module

Each module consists of three main pages:

1. **Landing Page**: Introduction to the module's concepts
2. **Story Page**: Educational narrative that teaches the concepts
3. **Quiz Page**: Interactive assessment of the learned material

## Code Structure

### HTML Structure

Each HTML file follows a minimal structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Module Title]</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <!-- Content rendered by JavaScript -->
    </div>
    <script src="[module].js"></script>
    
    <!-- Module navigation -->
    <div class="module-nav">
        <a href="module1.html" class="module-link">Module 1</a>
        <a href="module2.html" class="module-link">Module 2</a>
    </div>
</body>
</html>
```

### JavaScript Structure

Each module's JavaScript follows this pattern:

1. **Content Definition**: JSON-like object containing all text, questions, and navigation
2. **Application State**: Variables to track current page and quiz state
3. **Render Functions**: Functions to generate HTML for each page type
4. **Interaction Functions**: Event handlers for user interactions
5. **Initialization**: Code to start the application when the page loads

Example structure:

```javascript
// Course content
const courseContent = {
    landingPage: { /* content */ },
    storyPage: { /* content */ },
    quizPage: { /* content */ }
};

// Application state
let currentPage = 'landing';
let selectedAnswers = [];
let quizSubmitted = false;

// Render functions
function renderLandingPage() { /* ... */ }
function renderStoryPage() { /* ... */ }
function renderQuizPage() { /* ... */ }

// Navigation and interaction functions
function navigateTo(page) { /* ... */ }
function selectAnswer(questionIndex, optionIndex) { /* ... */ }
function submitQuiz() { /* ... */ }
function resetQuiz() { /* ... */ }
function calculateScore() { /* ... */ }

// Main render function
function renderApp() { /* ... */ }

// Initialize the app
document.addEventListener('DOMContentLoaded', renderApp);
```

## Adding New Modules

To add a new module to the application:

1. **Create Content**: Write module content in Markdown format (similar to moduleX.md files)
2. **Create HTML File**: Create a new moduleX.html file based on the existing templates
3. **Create JavaScript File**: Create a new moduleX.js file with the module's content and functionality
4. **Update Landing Page**: Add a new module card to index.html
5. **Update Navigation**: Add the new module to the navigation bar in all HTML files

### Step-by-Step Guide for Adding Module 3

1. **Create module3.html**:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>[Module 3 Title]</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <div id="app">
           <!-- Content rendered by JavaScript -->
       </div>
       <script src="module3.js"></script>
       
       <!-- Module navigation -->
       <div class="module-nav">
           <a href="module1.html" class="module-link">Module 1</a>
           <a href="module2.html" class="module-link">Module 2</a>
           <a href="module3.html" class="module-link active">Module 3</a>
       </div>
   </body>
   </html>
   ```

2. **Create module3.js** based on the template from existing modules, updating the content.

3. **Update index.html** to include the new module card:
   ```html
   <!-- Add to the module-cards section -->
   <div class="module-card">
       <img src="imgs/3_1.jpeg" alt="Module 3" class="card-image">
       <div class="card-content">
           <h2 class="card-title">Module 3: [Title]</h2>
           <p class="card-description">[Description]</p>
           <a href="module3.html" class="btn">Start Module 3</a>
       </div>
   </div>
   ```

4. **Update navigation** in all module HTML files to include the new module.

5. **Update previous modules** to link to the new module from quiz completion pages.

## Customization

### Styling

All styling is handled in the `styles.css` file. The application uses a dark theme with blue accents. Key style components:

- **Color Scheme**: Dark blue backgrounds (#0a0e17, #1a1f2e) with light blue accents (#4fc3f7)
- **Layout**: Flexbox-based responsive layout
- **Animations**: Simple fade-in animations for page transitions

To modify the theme:

1. **Change Colors**: Update the color values in `styles.css`
2. **Modify Layout**: Adjust the flexbox properties and container dimensions
3. **Add New Components**: Add new CSS classes for any additional UI components

### Content

To modify module content:

1. **Update Text**: Modify the content in the corresponding moduleX.js file
2. **Add Images**: Place new images in the imgs/ directory and update references
3. **Modify Quiz Questions**: Update the questions array in the quizPage section

## Best Practices for Future Development

1. **Maintain Consistency**: Keep the same structure and naming conventions across modules
2. **Mobile Responsiveness**: Ensure all new features are mobile-friendly
3. **Accessibility**: Maintain good accessibility practices with proper semantic HTML
4. **Performance**: Keep the application lightweight by avoiding unnecessary dependencies
5. **Modularity**: Continue the modular approach for easy maintenance
6. **Documentation**: Document any new features or significant changes

## Potential Future Enhancements

1. **Progress Tracking**: Implement local storage to track user progress across modules
2. **More Interactive Elements**: Add drag-and-drop exercises or interactive diagrams
3. **Audio Narration**: Add audio support for the story sections
4. **Customizable UI**: Allow users to switch between light and dark themes
5. **More Visual Feedback**: Enhance quiz feedback with animations or visual cues
6. **Printable Certificates**: Generate completion certificates after finishing modules
7. **Additional Modules**: Add more logic concepts like categorical logic, symbolic logic, or cognitive biases

## Troubleshooting Common Issues

1. **Image Loading**: Ensure image paths are correct relative to the HTML files
2. **Navigation Links**: Check that all module links point to the correct HTML files
3. **Quiz Submission**: If quiz submission doesn't work, check the event handlers
4. **Responsive Issues**: Test on various screen sizes and adjust CSS as needed

## Deployment

This application can be deployed on any static web server as it doesn't require any backend processing. Simply upload all the files to a web server or use a static site hosting service like GitHub Pages, Netlify, or Vercel.

## License and Attribution

The application content is based on the original Markdown files (moduleX.md). Ensure proper attribution is maintained for any third-party content like images or text.

---

*This documentation was created on March 25, 2025 for the Chronarium Logic Course project.*