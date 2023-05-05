let switchMode = document.getElementById("switchMode");

switchMode.onclick = function ()  {
   let theme = document.getElementById("theme");

   if (theme.getAttribute("href") == "light-mode.css") {
      theme.href = "dark-mode.css";
   } else {
      theme.href ="light-mode.css";
   }
}


//document.querySelector('.themetoggle').addEventListener('click', (event) => {
//   event.preventDefault();
//   if (localStorage.getItem('theme') === 'dark') {
//      localStorage.removeItem('theme');
//   }
//   else {
//      localStorage.setItem('theme', 'dark')
//   }
//   addDarkClassToHTML()
//});

//function addDarkClassTOHTML() {
//   try {
//      if (localStorage.getItem('theme') === 'dark') {
//         document.querySelector('html').classList.add('dark');
//         document.querySelector('.themetoggle i').textContent = 'dark_mode';
//      }
//      else {
//         document.querySelector('html').classList.remove('dark');
//         document.querySelector('.themetoggle i').textContent = 'bx-moon';
//      }
//   } catch (err) { }
//}

//addDarkClassToHTML();