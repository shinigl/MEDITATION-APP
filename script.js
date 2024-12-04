let layer1 = document.getElementById('layer1');
let layer2 = document.getElementById('layer2');
let layer3 = document.getElementById('layer3');
let layer4 = document.getElementById('layer4');
let layer5 = document.getElementById('layer5');
let layer6 = document.getElementById('layer6');
let layer7 = document.getElementById('layer7');
let layer8 = document.getElementById('layer8');
let layer9 = document.getElementById('layer9');
let layer10 = document.getElementById('layer10');
let layer11 = document.getElementById('layer11');
let layer12 = document.getElementById('layer12');
let layer13 = document.getElementById('layer13');
let text = document.getElementById('shin-Text');
let scrollText = document.getElementById('scroll-text');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginBottom = value * 1.5 + 'px';
    layer5.style.top = value * 2.5 + 'px';
    layer4.style.marginTop = value * 1.5 + 'px';
    layer8.style.top = value * 1.5 + 'px';
    layer8.style.marginLeft = value * 1.5 + 'px';
    layer9.style.marginLeft = value * 1.5 + 'px';
    layer1.style.marginTop = value * 1.5 + 'px';
});

// document.getElementById('share-progress-btn').addEventListener('click', function() {
//     const subject = encodeURIComponent("Sharing my progress on ShinHaven");
//     const body = encodeURIComponent("Hi ShinHaven Team,\n\nI would like to share my progress and experiences so far. Here's what I have achieved:\n\n1. [Insert achievement]\n2. [Insert achievement]\n\nLooking forward to more growth and peace.\n\nBest regards,\n[Your Name]");
//     const mailtoLink = `mailto:contact@shinhaven.com?subject=${subject}&body=${body}`;

//     window.location.href = mailtoLink;
// });

//Sign Up button
window.onload = function() {
    const username = localStorage.getItem('username');
    const signUpButton = document.getElementById('sign-up-btn');
    const logoutButton = document.getElementById('logout-btn');
    const greeting = document.getElementById('greeting');

    if (username) {
        // If the user is logged in, show the username and greeting message
        signUpButton.style.display = 'none';  
        greeting.innerText = `Hello ${username}!😇 `;
        greeting.style.textShadow = `3px 3px 12px grey`
        
        // Show the logout button
        logoutButton.style.display = 'block';
    } else {
        // If no user is logged in, display the Sign-Up button
        signUpButton.style.display = 'block';
        greeting.innerText = ''; // Clear the greeting when not logged in
    }
};




function logout() {
    // Clear user data from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // Refresh the page to reflect the changes
    window.location.reload();
}

//Mood Tracker

document.addEventListener('DOMContentLoaded', function () {
    // Array to store mood history
    let moodHistory = [];

    // Select all mood buttons and add event listeners to them
    const moodButtons = document.querySelectorAll('.mood-btn');
    
    moodButtons.forEach(button => {
        button.addEventListener('click', function() {
            setMood(button.textContent.trim());
        });
    });

    // Function to set the mood for the day and redirect after a brief delay
    function setMood(mood) {
        console.log(`Mood set to: ${mood}`);  // Debugging message

        // Sanitize mood to create a valid class name (remove spaces and special characters)
        const sanitizedMood = sanitizeMood(mood);

        // Create a new mood entry with the current date
        const moodEntry = {
            mood: mood,
            sanitizedMood: sanitizedMood,
            date: new Date().toLocaleDateString(),  // Current date in 'MM/DD/YYYY' format
            suggestion: getMoodSuggestion(mood)  // Get the suggestion based on the mood
        };

        // Add the new entry to the mood history
        moodHistory.push(moodEntry);

        // Update the mood history display
        updateMoodHistory();

        // Show the modal with redirection message
        showRedirectModal(mood);
    }

    // Function to sanitize mood string for use as a class name
    function sanitizeMood(mood) {
        return mood.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }

    // Function to update the mood history on the page
    function updateMoodHistory() {
        const historyList = document.getElementById('history-list');

        // Clear the existing history list
        historyList.innerHTML = '';

        // Loop through each mood entry and display it
        moodHistory.forEach(entry => {
            const li = document.createElement('li');
            li.classList.add(entry.sanitizedMood);  // Add sanitized mood as a class for styling
            li.innerHTML = `${entry.date}: <strong>${entry.mood}</strong><br><em>${entry.suggestion}</em>`;
            li.style.listStyle='none';
            historyList.appendChild(li);
        });
    }

    // Function to generate a suggestion based on the mood
    function getMoodSuggestion(mood) {
        switch (mood) {
            case '😊 Happy':
                return 'Based on your mood, we recommend exploring the music section to enhance your joy.';
            case '😌 Calm':
                return 'Since you’re feeling calm, the scenery section will help you connect with tranquility.';
            case '😫 Stressed':
                return 'It seems like you’re stressed. Take a break and explore relaxation techniques to ease your mind.';
            case '😟 Anxious':
                return 'Feeling anxious? A mind chat might help you find clarity and peace of mind.';
            case '😢 Sad':
                return 'You may benefit from soothing music to uplift your spirits and find peace.';
            default:
                return 'We couldn\'t determine a suggestion for your mood at the moment.';
        }
    }

    // Function to show the redirection modal
    function showRedirectModal(mood) {
        const modal = document.getElementById('redirect-modal');
        const message = document.getElementById('redirect-message');
        const suggestion = document.getElementById('suggested-action');

        // Set the redirection message and suggestion text
        message.textContent = `You are feeling ${mood}!`;
        suggestion.textContent = getMoodSuggestion(mood);

        // Display the modal
        modal.style.display = 'flex';

        // Hide the modal after 3 seconds and perform the redirection
        setTimeout(() => {
            modal.style.display = 'none';  // Hide the modal
            redirectToSuggestedPage(mood);  // Perform redirection
        }, 3000); // 3 seconds delay
    }

    // Function to handle the page redirection based on the mood
    function redirectToSuggestedPage(mood) {
        switch (mood) {
            case '😊 Happy':
                window.location.href = 'music.html';  // Redirect to the Music section
                break;
            case '😌 Calm':
                window.location.href = 'scene.html';  // Redirect to the Scenery section
                break;
            case '😫 Stressed':
                window.location.href = 'relax-breathe.html';  // Redirect to Relaxation section
                break;
            case '😟 Anxious':
                window.location.href = 'mind-chat.html';  // Redirect to the Mind Chat section
                break;
            case '😢 Sad':
                window.location.href = 'music.html';  // Redirect to the Music section (or any other page you find appropriate)
                break;
            default:
                console.log('Invalid mood selection');
        }
    }

    // Initial call to load mood history if any
    updateMoodHistory();
});
