const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');

const change = document.getElementById('theme-switch-toggle');


function changeTheme(e) {
    e.currentTarget.checked ? changeThemeDark() : changeThemeLight();
}

function changeThemeDark() {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
    change.checked = true
    localStorage.setItem('toggle','Theme.DARK')
}

function changeThemeLight() {
    body.classList.remove(Theme.DARK)
    body.classList.add(Theme.LIGHT)
    change.checked = false
    localStorage.setItem('toggle','Theme.LIGHT')
}

// function savedTheme() {
//   const current = localStorage.getItem('toggle');
//   if (current === Theme.LIGHT || current === null) {
//     changeThemeLight()
//     return;
//   }

//   if (current === Theme.DARK) {
//     changeThemeDark();
//     return;
//   }
// }
// savedTheme()