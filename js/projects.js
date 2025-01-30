function toggleAccordion(index) {
    console.log("%cDesigned & Developed by Ritwik Deshmukh", "color: #7db424; font-size: 14px;");
    const headers = document.querySelectorAll(".accordion-header");
    const contents = document.querySelectorAll(".accordion-content");
    
    headers[index].classList.toggle("active");
    
    if (contents[index].style.display === "block") {
        contents[index].style.display = "none";
    } else {
        contents[index].style.display = "block";
    }
}

function openProjectPopup(title, category, image, link, details) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-category").innerText =  category;
    document.getElementById("popup-image").src = image;
    document.getElementById("popup-link").href = link;

    const descriptionList = document.getElementById("popup-description-list");
    descriptionList.innerHTML = "";
    details.forEach(point => {
        let li = document.createElement("li");
        li.innerText = point;
        descriptionList.appendChild(li);
    });

    document.getElementById("project-popup").style.display = "flex";
}

function closeProjectPopup() {
    document.getElementById("project-popup").style.display = "none";
}

/*
 * Author: Ritwik Deshmukh
 * Created: January 2025
 * Website: https://ritwik.io
 * Description: Portfolio Website
 */