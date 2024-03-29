let language = "eng"; // Default language is English
var englishItems = document.getElementsByClassName("eng");
var koreanItems = document.getElementsByClassName("kor");

document.addEventListener("DOMContentLoaded", function () {
  // Makes Korean sections hidden by default (language switching currently disabled).
  // var englishItems = document.getElementsByClassName("eng");
  var koreanItems = document.getElementsByClassName("kor");
  for (var i = 0; i < koreanItems.length; i++) {
    koreanItems[i].style.display = "none";
  }

  $("#splash-button").on('click', function() {
    $("#contact").get(0).scrollIntoView({behavior: 'smooth'});
  });

  $('.home-scroll').on('click', function() {
    $("#home-scroll").get(0).scrollIntoView({behavior: 'smooth'});
  });

  $('.portfolio-scroll').on('click', function() {
    $("#portfolio-scroll").get(0).scrollIntoView({behavior: 'smooth'});
  });

  $('.about-scroll').on('click', function() {
    $("#about-scroll").get(0).scrollIntoView({behavior: 'smooth'});
  });

  $('.contact-scroll').on('click', function() {
    $("#contact").get(0).scrollIntoView({behavior: 'smooth'});
  });

  // Function to toggle long and short versions of 'about me' section (currently disabled)

  // document
  //   .getElementById("short-long-toggle")
  //   .addEventListener("mouseover", function () {
  //     document.getElementById("short-long-toggle").innerHTML =
  //       "The long version...";
  //   });
  //   document
  //   .getElementById("short-long-toggle")
  //   .addEventListener("mouseout", function () {
  //     document.getElementById("short-long-toggle").innerHTML =
  //       "The short version...";
  //   });

    // TODO: Make button stay as 'The Long Version...' when the long version is displayed
});

// Toggles navbar dropdown when hamburger is clicked
function toggleNavbar() {
  var dropdown = document.getElementById("dropdown");
  var hamburger = document.getElementById("hamburger");

  if (dropdown.style.display == "none") {
    hamburger.innerHTML = "&times;"; // Change icon to close symbol when clicked
    $(dropdown).slideToggle(200);
  } else {
    hamburger.innerHTML = "&#9776;"; // Change icon back to hamburger when clicked
    $(dropdown).slideToggle(200);
  }
}

function displayProject(project) {
  $("#project-info").load(`${project}-info.html`);
  $("#project-cards").slideToggle(400, function() {
    $("#project-info").slideToggle();
  });
  $("#portfolio-scroll").get(0).scrollIntoView({behavior: 'smooth'});
}

function hideProject() {
  $("#project-info").slideToggle(400, function() {
    $("#project-info").empty();
    $("#project-cards").slideToggle();
  });
  $("#portfolio-scroll").get(0).scrollIntoView({behavior: 'smooth'});
}

// Fix toggle language displaying things that should be hidden when switching languages
// E.g. hide long 'about me' by default (BUG: both long and short stories displayed after toggling language)
// Currently inactive
// function toggleLanguage() {
//   var hideOnToggle = [];

//   if (language == "eng") {
//     language = "kor";
//     for (var i = 0; i < englishItems.length; i++) {
//       if (englishItems[i].style.display == "none") {
//         hideOnToggle.push(englishItems[i]);
//       } else {
//         englishItems[i].style.display = "none";
//       }
//     }
//     for (var i = 0; i < koreanItems.length; i++) {
//       koreanItems[i].style.display = "inline-block";
//     }
//     document.getElementById("language").innerHTML = "English";
//     document.getElementById("language-dropdown").innerHTML = "English";
//   } else {
//     language = "eng";
//     for (var i = 0; i < englishItems.length; i++) {
//       if (hideOnToggle.includes(englishItems[i])) {
//         englishItems[i].style.display = "none";
//       } else {
//         englishItems[i].style.display = "inline-block";
//       }
//     }
//     for (var i = 0; i < koreanItems.length; i++) {
//       if (koreanItems[i].style.display == "none") {
//         hideOnToggle.push(koreanItems[i]);
//       }
//       koreanItems[i].style.display = "none";
//     }
//     document.getElementById("language").innerHTML = "한국어";
//     document.getElementById("language-dropdown").innerHTML = "하국어";
//   }
// }

// Toggles between long and short versions of 'about me' section
// Currently inactive
// function toggleShortLong() {
//   var short = document.getElementById("about-short");
//   var long = document.getElementById("about-long");

//   if (short.style.display == "none") {
//     short.style.display = "block";
//     long.style.display = "none";
//   } else {
//     short.style.display = "none";
//     long.style.display = "block";
//   }
// }

// Displays information about projects when clicked
// TODO: Make this work
// Project info becomes full size of project section. Has link to project and link to github
// Becomes iframe? Or just a div that takes up the whole section?