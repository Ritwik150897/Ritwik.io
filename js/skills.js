document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        "Python", "JavaScript", "SQL", "Tableau", "Power BI", "Figma",
        "UI/UX", "Data Analysis", "Machine Learning", "HTML", "CSS",
        "React", "Django", "Node.js", "Git", "MongoDB"
    ];

    const wordCloud = document.getElementById("word-cloud");
    const takenPositions = [];

    skills.forEach(skill => {
        const span = document.createElement("span");
        span.classList.add("word");
        span.textContent = skill;

        const fontSize = Math.floor(Math.random() * 15) + 15;
        span.style.fontSize = `${fontSize}px`;

        let left, top, collision;
        let maxAttempts = 100;

        do {
            left = Math.random() * 80 + 10;
            top = Math.random() * 80 + 10;

            collision = takenPositions.some(pos => 
                Math.abs(pos.left - left) < 10 && Math.abs(pos.top - top) < 5
            );

            maxAttempts--;
        } while (collision && maxAttempts > 0);

        takenPositions.push({ left, top });

        span.style.left = `${left}%`;
        span.style.top = `${top}%`;

        wordCloud.appendChild(span);
    });
});