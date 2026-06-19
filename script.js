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
// --- FLOATING CHAT WIDGET LOGIC ---
const chatToggleBtn = document.getElementById('chatToggleBtn');
const floatingChatWindow = document.getElementById('floatingChatWindow');
const closeChatBtn = document.getElementById('closeChatBtn');

// Open/Close chat window
if (chatToggleBtn && floatingChatWindow && closeChatBtn) {
    chatToggleBtn.addEventListener('click', () => {
        floatingChatWindow.classList.toggle('show');
    });
    closeChatBtn.addEventListener('click', () => {
        floatingChatWindow.classList.remove('show');
    });
}

// Gemini API Integration
const geminiApiKey = "YAHAN_APNA_GEMINI_API_KEY_PASTE_KAREIN"; // <-- Apni API Key yahan quotes ke andar dalein

const sendBtn = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');

if (sendBtn && chatInput && chatOutput) {
    sendBtn.addEventListener('click', async () => {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        // User message display
        chatOutput.innerHTML += `<div class="user-msg">${userMessage}</div>`;
        chatInput.value = '';
        chatOutput.scrollTop = chatOutput.scrollHeight;

        try {
            // Fetch directly from Gemini Server
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: userMessage }] }] })
            });

            const data = await response.json();
            const aiReply = data.candidates[0].content.parts[0].text;

            // AI reply display
            chatOutput.innerHTML += `<div class="bot-msg">${aiReply}</div>`;
        } catch (error) {
            chatOutput.innerHTML += `<div class="bot-msg" style="color: red;">Error! Please check your API key.</div>`;
        }
        chatOutput.scrollTop = chatOutput.scrollHeight;
    });
}
