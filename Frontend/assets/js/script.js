
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const navList = document.querySelector('#main-nav-list');

    toggleButton.addEventListener('click', function () {
        // Toggle the 'open' class on the navigation list
        navList.classList.toggle('open');

        // Toggle the aria-expanded attribute for accessibility
        const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !isExpanded);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('chatToggleButton');
    const chatWindow = document.getElementById('chat-window');

    function toggleChat() {
        const isHidden = chatWindow.getAttribute('aria-hidden') === 'true';

        chatWindow.classList.toggle('open');
        chatWindow.setAttribute('aria-hidden', !isHidden);
        toggleButton.setAttribute('aria-expanded', !isHidden);

        // Hide the toggle button when the window is open
        toggleButton.style.display = isHidden ? 'none' : 'block';
    }

    // Function to close the chat via the 'X' button
    window.closeChat = function () {
        chatWindow.classList.remove('open');
        chatWindow.setAttribute('aria-hidden', 'true');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.style.display = 'block';
    }

    toggleButton.addEventListener('click', toggleChat);
});

