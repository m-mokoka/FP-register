document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form default submission

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const role = document.getElementById('role').value;
  const timeIn = document.getElementById('timeIn').value;
  const timeOut = document.getElementById('timeOut').value;

  // Replace with your Google Apps Script Web App URL
  const googleScriptURL = 'https://script.google.com/macros/s/AKfycbyQj2otLa52zDwxQf7VVbBPQJUmA6ayaMHY9XyKgMRFbHrLbxtQcjBnKYErkWyX8Y8d/exec';

  fetch(googleScriptURL ='https://script.google.com/macros/s/AKfycbyQj2otLa52zDwxQf7VVbBPQJUmA6ayaMHY9XyKgMRFbHrLbxtQcjBnKYErkWyX8Y8d/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: fullName,
      email: email,
      phone: phone,
      role: role,
      timeIn: timeIn,
      timeOut: timeOut
    })
  })
  .then(response => response.text())
  .then(data => {
    alert('Register submitted successfully!');
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
    alert('Failed to submit register.');
  });
});

