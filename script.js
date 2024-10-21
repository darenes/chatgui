document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();

    if (message === '') return;

    // Create a new message element
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.textContent = message;

    // Append the message to the chat box
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    input.value = '';
}
