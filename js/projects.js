function toggleAccordion(index) {
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