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

document.getElementById('share-progress-btn').addEventListener('click', function() {
    const subject = encodeURIComponent("Sharing my progress on ShinHaven");
    const body = encodeURIComponent("Hi ShinHaven Team,\n\nI would like to share my progress and experiences so far. Here's what I have achieved:\n\n1. [Insert achievement]\n2. [Insert achievement]\n\nLooking forward to more growth and peace.\n\nBest regards,\n[Your Name]");
    const mailtoLink = `mailto:contact@shinhaven.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
});

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
