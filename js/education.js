document.addEventListener("DOMContentLoaded", function() {

    window.toggleEducation = function(index) {
        const details = document.querySelectorAll('.education-details');
        const icons = document.querySelectorAll('.education-header .toggle-icon');
        const selectedDetail = details[index];
        const selectedIcon = icons[index];

        if (selectedDetail.style.display === "none" || selectedDetail.style.display === "") {
            details.forEach((detail, i) => {
                detail.style.display = "none";
                icons[i].classList.remove("fa-chevron-up");
                icons[i].classList.add("fa-chevron-down");
            });

            selectedDetail.style.display = "block";
            selectedIcon.classList.remove("fa-chevron-down");
            selectedIcon.classList.add("fa-chevron-up");
        } else {
            selectedDetail.style.display = "none";
            selectedIcon.classList.remove("fa-chevron-up");
            selectedIcon.classList.add("fa-chevron-down");
        }
    };
});