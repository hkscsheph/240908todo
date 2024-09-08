document
  .getElementById('loginForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwljBSBCJqkb6q9QPfjkLCy1iaaekklpCp1YsHwUaeRonGbuCacXNalgQH78uEb1PIo/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(
          username
        )}&password=${encodeURIComponent(password)}`,
      }
    );

    const message = await response.text();
    document.getElementById('message').textContent = message;

    if (response.ok) {
      // 登入成功，重定向至 TODO APP
      localStorage.setItem('username', username);
      window.location.href = '/todo.html'; // 替換為你的 TODO APP URL
    }
  });
