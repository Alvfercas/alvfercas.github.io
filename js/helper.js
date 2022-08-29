// Insert handwritten tags
const elementWithTags = document.getElementsByClassName("handwritten-tag");
for (let i = 0; i < elementWithTags.length; i++) {
    const element = elementWithTags[i];
    const tagName = element.tagName.toLowerCase();
    const customTag = element.getAttribute("data-handwritten-tag");

    const openTag = document.createElement("span");
    openTag.classList.add("qwitcher-grypen");
    openTag.innerHTML = "&#60;" + (customTag ?? tagName) + "&#62;";
    element.prepend(openTag);

    const closeTag = document.createElement("span");
    closeTag.classList.add("qwitcher-grypen");
    closeTag.innerHTML = "&#60;/" + (customTag ?? tagName) + "&#62;";
    element.append(closeTag);
}

function darkMode(){
    const body = document.getElementsByTagName("body")[0];
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const bulmaLogo = document.getElementById("made-with-bulma");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        darkModeIcon.attributes["data-icon"].value = "moon";
        bulmaLogo.attributes["src"].value = "img/made-with-bulma.png";
    }else{
        body.classList.add("dark-mode");
        darkModeIcon.attributes["data-icon"].value = "sun";
        bulmaLogo.attributes["src"].value = "img/made-with-bulma-white.png";
    }
}