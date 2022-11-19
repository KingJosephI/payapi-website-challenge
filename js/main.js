const activePage = location.pathname;

// console.log(activePage);
// console.log(screen.width);

if (activePage !== '/' && activePage !== '/index.html') {
  if (screen.width <= 700) {
    // document.body.style.backgroundPosition = 'top -620px right -400px';
    // document.body.style.backgroundPosition = 'top -820px right -400px';
  } else if (screen.width > 700 && screen.width < 1024) {
    // document.body.style.backgroundPosition = 'top -700px right -750px';
    // console.log(screen.width);
  } else {
    document.body.style.backgroundPosition = 'top -520px right -150px';
  }
}
