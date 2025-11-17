// const firebaseProjectUrl = 'https://comp101-js-alice-default-rtdb.firebaseio.com/';
const firebaseProjectUrl = 'https://comp101-lab8-salmafahmy-1d8a8-default-rtdb.firebaseio.com/';
const databaseUrl = firebaseProjectUrl + 'msg.json';

const submitButton = document.getElementById('submitButton');
submitButton.onclick = submitForm; // Call submitForm on click

async function submitForm() {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('your-message').value.trim();
    const email = document.getElementById('email').value.trim(); // Get email

    if (name || message || email) { // Include email in the check
        const data = {
            name: name,
            email: email,       // Add email here
            message: message
        };
        try {
            const response = await fetch(databaseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            if (!response.ok) { 
                throw new Error('Failed to send message');
            }
            showThanksAlert();
        } catch (error) {
            console.error('Error when sending message:', error);
        }
    }
}

function showThanksAlert() {
    alert("Thanks for your message. We will get back to you soon!");
}
