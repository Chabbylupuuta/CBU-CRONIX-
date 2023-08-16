document.addEventListener("DOMContentLoaded", function() {
    const loginButtons = document.querySelectorAll(".btn");
  
    // Add hover effect to the login buttons
    loginButtons.forEach(function(loginButton) {
      loginButton.addEventListener("mouseenter", function onMouseEnter() {
        loginButton.style.backgroundColor = "#2b1818";
        loginButton.style.color = "#fff";
      });
  
      loginButton.addEventListener("mouseleave", function onMouseLeave() {
        loginButton.style.backgroundColor = "#fff";
        loginButton.style.color = "#333";
      });
    });
  });
  