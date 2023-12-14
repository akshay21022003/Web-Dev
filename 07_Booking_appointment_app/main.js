const form = document.getElementById('my-form');
const userList = document.getElementById('users');

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

  displayUsers(); 
}

form.addEventListener('submit', handleSubmit);

function displayUsers() {
  userList.innerHTML = '';

  let users = JSON.parse(localStorage.getItem('users')) || [];

  users.forEach((user, index) => {
    const li = document.createElement('li');
    li.textContent = `Name: ${user.name}, Email: ${user.email}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteUser(index);
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      editUser(index);
    });

    li.appendChild(deleteButton);
    li.appendChild(editButton);

    userList.appendChild(li);
  });
}

function deleteUser(index) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  
  users.splice(index, 1);
  
  localStorage.setItem('users', JSON.stringify(users));
  
  displayUsers();
}


displayUsers();
