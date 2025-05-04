const os = navigator.platform;
const browser = navigator.userAgent;

localStorage.setItem("os", os);

localStorage.setItem("browser", browser);

let info = "";

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  const value = localStorage.getItem(key);

  info += `${key}: ${value}<br>`;
}

document.getElementById("localStorageInfo").innerHTML = info;

const url = `https://jsonplaceholder.typicode.com/posts/12/comments`;

fetch(url)
  .then((response) => response.json())
  .then((comments) => {
    const list = document.getElementById("reviews");
    comments.forEach((comment) => {
      const li = document.createElement("li");
      li.innerHTML = `${comment.name}: <br>${comment.body}`;
      list.appendChild(li);
    });
  });

let styleMode = localStorage.getItem("styleMode");
const styleToggle = document.querySelector(".switcher");

const enableDarkStyle = () => {
  document.body.classList.add("darkstyle");
  localStorage.setItem("styleMode", "dark");
};

const disableDarkStyle = () => {
  document.body.classList.remove("darkstyle");
  localStorage.setItem("styleMode", "light");
};

if (styleMode === "dark" || (styleMode === null &&
    (new Date().getHours() >= 21 || new Date().getHours() < 7))) {
  enableDarkStyle();
} else {
  disableDarkStyle();
}

styleToggle.addEventListener("click", () => {
  styleMode = localStorage.getItem("styleMode");
  if (styleMode !== "dark") {
    enableDarkStyle();
  } else {
    disableDarkStyle();
  }
});
