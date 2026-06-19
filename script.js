// Button aur Body elements ko select karna
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Button par click event lagana
toggleBtn.addEventListener('click', () => {
    // Body par 'dark-mode' class ko toggle (add/remove) karna
    body.classList.toggle('dark-mode');
    
    // Button ka text aur emoji badalna
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerHTML = "☀️ Light Mode";
    } else {
        toggleBtn.innerHTML = "🌙 Dark Mode";
    }
});
// --- MY PROJECTS BUTTON DROPDOWN LOGIC ---
const projectBtn = document.getElementById('projectBtn');
const projectDropdown = document.getElementById('projectDropdown');

if (projectBtn && projectDropdown) {
    projectBtn.addEventListener('click', () => {
        // Toggle class 'show' on click
        projectDropdown.classList.toggle('show');
    });
}
