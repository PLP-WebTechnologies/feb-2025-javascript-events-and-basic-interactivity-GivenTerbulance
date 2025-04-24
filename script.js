// script.js

document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button clicked!');
});

document.getElementById('hoverBtn').addEventListener('mouseover', () => {
  alert('You hovered over me!');
});

document.getElementById('keyInput').addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

let clickTimer;
document.getElementById('secretBtn').addEventListener('mousedown', () => {
  clickTimer = setTimeout(() => alert('Long press detected! 🤫'), 1000);
});
document.getElementById('secretBtn').addEventListener('mouseup', () => {
  clearTimeout(clickTimer);
});

// Interactive Elements
const colorBtn = document.getElementById('colorChangeBtn');
colorBtn.addEventListener('click', () => {
  colorBtn.style.backgroundColor = colorBtn.style.backgroundColor === 'lightblue' ? 'salmon' : 'lightblue';
});

const images = [
  'https://via.placeholder.com/300/ff7f7f',
  'https://via.placeholder.com/300/7fbfff',
  'https://via.placeholder.com/300/7fff7f'
];
let currentImg = 0;
const galleryImage = document.getElementById('galleryImage');

document.getElementById('nextImg').addEventListener('click', () => {
  currentImg = (currentImg + 1) % images.length;
  galleryImage.src = images[currentImg];
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
    document.getElementById('tab' + tab.dataset.tab).style.display = 'block';
  });
});

// Form Validation
const form = document.getElementById('signupForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let message = '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    message += 'Invalid email format.\n';
  }
  if (password.length < 8) {
    message += 'Password must be at least 8 characters.';
  }

  feedback.textContent = message || 'Form submitted successfully!';
  feedback.style.color = message ? 'red' : 'green';
});

['name', 'email', 'password'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    feedback.textContent = '';
  });
});
