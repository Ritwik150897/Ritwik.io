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