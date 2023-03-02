
  // Get the current URL and extract the page name
  let currentUrl = window.location.href;
  let currentPage = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);

  // Loop through all the nav items and check if their link matches the current page name
  let navItems = document.querySelectorAll('.nav-item');
  for (let i = 0; i < navItems.length; i++) {
    let navLink = navItems[i].querySelector('a').getAttribute('href');
    if (navLink === currentPage) {
      navItems[i].classList.add('active'); // Add the 'active' class to the corresponding nav item
      break; // Stop looping once a match is found
    }
  }