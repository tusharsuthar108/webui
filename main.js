// Secure function to load HTML content with error handling
function loadHTMLContent(url, elementId) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID '${elementId}' not found`);
    return;
  }
  
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      // Basic sanitization - remove script tags for security
      const sanitizedData = data.replace(/<script[^>]*>.*?<\/script>/gi, '');
      element.innerHTML = sanitizedData;
    })
    .catch((error) => {
      console.error(`Error loading ${url}:`, error);
      element.innerHTML = `<div class="error">Failed to load content</div>`;
    });
}

// Load components with error handling
loadHTMLContent("navbar.html", "navbar");
loadHTMLContent("hero.html", "hero");
loadHTMLContent("footer.html", "footer");
document.addEventListener("click", function (e) {
  if (!e.target.closest(".navbar2")) {
    document
      .querySelectorAll(".navbar2-item")
      .forEach((item) => item.classList.remove("open"));
  }

  if (!e.target.closest(".nav-item")) {
    const langDrop = document.getElementById("langDrop");
    const cityDrop = document.getElementById("cityDrop");
    
    if (langDrop) langDrop.style.display = "none";
    if (cityDrop) cityDrop.style.display = "none";
  }
});
