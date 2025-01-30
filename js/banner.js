document.addEventListener("DOMContentLoaded", function() {
    const roles = [
        "Product Manager",
        "Business Analyst",
        "Data Analyst",
        "UI/UX Designer",
        "Snacko-holic",
        "Nature Lover",
    ];

    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let typingSpeed = 50;
    let deletingSpeed = 50;
    let delayBetweenRoles = 1500;
    
    const subheading = document.getElementById("subheading");

    function typeText() {
        let currentRole = roles[currentRoleIndex];
        if (currentCharIndex < currentRole.length) {
            subheading.innerHTML = `<span class="typewriter">${currentRole.slice(0, currentCharIndex + 1)}</span>`;
            currentCharIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(deleteText, delayBetweenRoles);
        }
    }

    function deleteText() {
        let currentRole = roles[currentRoleIndex];
        if (currentCharIndex > 0) {
            subheading.innerHTML = `<span class="typewriter">${currentRole.slice(0, currentCharIndex - 1)}</span>`;
            currentCharIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText();
});