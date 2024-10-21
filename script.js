// Basic users data for search functionality
const users = ['alice', 'bob', 'charlie', 'david'];

// Event listener for login
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username-input').value.trim();
    if (username) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('app-page').style.display = 'block';
    }
});

// Search user functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
    const userResults = document.getElementById('user-results');
    userResults.innerHTML = ''; // Clear previous results

    if (searchQuery) {
        const foundUsers = users.filter(user => user.includes(searchQuery));

        if (foundUsers.length > 0) {
            foundUsers.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.textContent = user;
                userDiv.classList.add('user-result');
                userDiv.addEventListener('click', () => requestDM(user));
                userResults.appendChild(userDiv);
            });
        } else {
            userResults.textContent = 'No users found';
        }
    }
});

// Request a DM with the user
function requestDM(user) {
    document.getElementById('dm-user').textContent = user;
    document.getElementById('dm-container').style.display = 'block';
}

// Sending messages in the DM
document.getElementById('dm-send-btn').addEventListener('click', sendMessage);
document.getElementById('dm-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = document.getElementById('dm-input').value.trim();
    const chatBox = document.getElementById('chat-box');

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('message');
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById('dm-input').value = ''; // Clear input field
    }
}

// Toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
