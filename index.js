document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form default submission

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const role = document.getElementById('role').value;
  const timeIn = document.getElementById('timeIn').value;
  const timeOut = document.getElementById('timeOut').value;

  // Replace with your Google Apps Script Web App URL
  const googleScriptURL = 'https://script.google.com/macros/s/AKfycbwuFbIV_axObGIn0OkpdZ4NdW1ksiE8YqVSw4dPmwg0Asbx4ReLoaObbbYGnnsGSnQ6/exec';

  fetch(googleScriptURL, {
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

