function openNclose() {
  var x = document.getElementById("nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
    document.querySelector("#ham-img").src = "icons8-menu.svg";
  } else {
    x.style.display = "flex";
    document.querySelector("#ham-img").src = "icons8-close.svg";
  }
}

function jump(h) {
  var top = document.getElementById(h).offsetTop;
  window.scrollTo(0, top);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));





// function themeToggle() {
//   const body = document.body;
//   const toggle = document.getElementById("thee");
//   body.classList.toggle('dark-mode');
//   if (document.querySelector("#thee").src = "sun-solid.svg") {
//     document.querySelector("#thee").src = "moon-solid.svg";
//   } else {
//     document.querySelector("#thee").src = "sun-solid.svg";
//   }
// }

// const themeSwitcher = document.getElementById("thee");

// themeSwitcher.checked = false;
// function clickHandler (){
//      if (this.checked){
//         //  document.body.classList.remove("light-mode");
//         //  document.body.classList.add("dark-mode");
//          document.body.classList.replace("light-mode", "dark-mode");
//          localStorage.setItem("theme","dark-mode");
//      } else {
//         //  document.body.classList.add( "light-mode");
//         //  document.body.classList.remove("dark-mode");
//          document.body.classList.replace("dark-mode", "light-mode");
//          localStorage.setItem("theme","light-mode");
//         }
//       }
// themeSwitcher.addEventListener("click",clickHandler);

// window.onload = checkTheme();
// function checkTheme(){
//      const localStorageTheme = localStorage.getItem("theme");
//      if(localStorageTheme !== null && localStorageTheme === "dark") {
//          // set the theme of body
//          document.body.className = localStorageTheme;
//          // adjust the slider position
//          const themeSwitch = document.getElementById("theme-switch");
//          themeSwitch.checked = true;
//      }
//  }


const themeSwitcher = document.getElementById("thee");

themeSwitcher.checked = false;
function clickHandler() {
    if (this.checked) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
}
themeSwitcher.addEventListener("click", clickHandler);

window.onload = checkTheme();

function checkTheme() {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme !== null && localStorageTheme === "dark") {
        // set the theme of body
        document.body.className = localStorageTheme;

        // adjust the slider position
        const themeSwitch = document.getElementById("thee");
        themeSwitch.checked = true;
    }
}