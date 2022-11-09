const signinFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signin').value.trim();
  const password = document.querySelector('#password-signin').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    //make sure to add this to everything front end to get correct results
    const result = await response.json()
    console.log(result)
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign in.');
    }
  }
};

document
  .querySelector('.signin-form')
  .addEventListener('submit', signinFormHandler);

