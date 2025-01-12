var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-scroll").style.top = "0";
  } else {
    document.getElementById("navbar-scroll").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



// prevent user from inspect//
document.addEventListener('contextmenu', (event) => event.preventDefault()); // Disable right-click

document.addEventListener('keydown', (event) => {
  // Disable specific key combinations
  if (
    event.key === "F12" || // F12 for DevTools
    (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
    (event.ctrlKey && event.shiftKey && event.key === "C") || // Ctrl+Shift+C
    (event.ctrlKey && event.key === "U") // Ctrl+U for View Source
  ) {
    event.preventDefault();
  }
});

// Optional: Additional protection for devtools
let isDevToolsOpen = false;
const element = new Image();
Object.defineProperty(element, "id", {
  get: () => {
    isDevToolsOpen = true;
    throw new Error("DevTools Detected");
  },
});

setInterval(() => {
  isDevToolsOpen = false;
  console.log(element);
  if (isDevToolsOpen) {
    alert("Please close the developer tools.");
  }
}, 1000);




// clients section //
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");

  // Calculate the total width of the slider track
  const totalWidth = Array.from(track.children).reduce((total, img) => {
    const style = window.getComputedStyle(img);
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    return total + img.getBoundingClientRect().width + margin;
  }, 0);

  // Set the CSS variable for track width and animation duration
  track.style.setProperty("--track-width", totalWidth + "px");

  // Dynamically set animation duration based on width
  const animationDuration = totalWidth / 100; // Adjust speed here (higher divisor = faster)
  track.style.setProperty("--animation-duration", `${animationDuration}s`);
});











// Get all sections and menu items
const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.fixed-menu a');

// Smooth scroll to section with offset
menuItems.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll with offset of 250px
    window.scrollTo({
      top: targetSection.offsetTop - 100,
      behavior: 'smooth'
    });
  });
});

// Update active state based on scroll
window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 300; // Active state offset
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  menuItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});












document.addEventListener('DOMContentLoaded', () => {
  const correctPassword = 'ABC@def#123'; // Define your password here
  let targetUrl = '';

  const modal = new bootstrap.Modal(document.getElementById('passwordModal'));
  const passwordInput = document.getElementById('passwordInput');
  const feedback = document.getElementById('feedback');
  const submitPasswordBtn = document.getElementById('submitPassword');

  // Open modal and set the target URL
  document.querySelectorAll('.open-modal-btn').forEach(button => {
    button.addEventListener('click', () => {
      targetUrl = button.getAttribute('data-case-study');
      passwordInput.value = ''; // Clear input
      feedback.textContent = ''; // Clear feedback
      passwordInput.classList.remove('is-invalid');
      modal.show();
    });
  });

  // Validate password and redirect
  submitPasswordBtn.addEventListener('click', () => {
    if (passwordInput.value.trim() === correctPassword) {
      modal.hide();
      window.location.href = targetUrl; // Redirect to the correct case study
    } else {
      passwordInput.classList.add('is-invalid');
      feedback.textContent = 'Incorrect password. Please try again.';
    }
  });
});



const images = document.querySelectorAll('.image-gif img');
        let currentIndex = 0;

        setInterval(() => {
            // Remove the active class from the current image
            images[currentIndex].classList.remove('active');

            // Update the index to the next image
            currentIndex = (currentIndex + 1) % images.length;

            // Add the active class to the new current image
            images[currentIndex].classList.add('active');
        }, 2000); // Change image every 2 seconds