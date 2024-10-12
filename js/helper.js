// Insert handwritten tags
const elementsWithTags = document.querySelectorAll(".handwritten-tag");

elementsWithTags.forEach((element) => {
  const tagName = element.tagName.toLowerCase();
  const customTag = element.dataset.handwrittenTag ?? tagName;

  const openTag = document.createElement("span");
  openTag.classList.add("qwitcher-grypen");
  openTag.innerHTML = `&#60;${customTag}&#62;`;

  const closeTag = document.createElement("span");
  closeTag.classList.add("qwitcher-grypen");
  closeTag.innerHTML = `&#60;/${customTag}&#62;`;

  element.insertAdjacentElement("afterbegin", openTag);
  element.insertAdjacentElement("beforeend", closeTag);
});

// Match system aspect preferences
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkMode();
}

function darkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    const themeColor = isDarkMode ? "#34495f" : "#ffffff";
    const darkModeIcon = document.getElementById("dark-mode-icon");
  
    darkModeIcon.classList.toggle("fa-sun", isDarkMode);
    darkModeIcon.classList.toggle("fa-moon", !isDarkMode);
    document.querySelector("meta[name='theme-color']").content = themeColor;
  }
  