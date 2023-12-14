const form = document.getElementById('my-form');

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const user = {
    name: name,
    email: email
  };

  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  console.log('User added to localStorage:', user);
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';

}

form.addEventListener('submit', handleSubmit);
