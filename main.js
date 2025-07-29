// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Form submission message
  const form = document.querySelector(".submit-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission

      // Extract data for confirmation (optional)
      const name = document.getElementById("name").value;
      const type = document.getElementById("type").value;
      const quantity = document.getElementById("quantity").value;

      // Basic validation
      if (!name || !type || !quantity) {
        alert("Please fill all required fields.");
        return;
      }

      // Confirmation message
      alert(`Thank you, ${name}. Your ${quantity}kg of ${type} plastic has been submitted!`);

      // Optional: reset form
      form.reset();
    });
  }

  // Navigation highlight (optional enhancement)
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.textDecoration = "underline";
    }
  });
});
