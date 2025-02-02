document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const role = document.getElementById("role").value;
  const timeIn = document.getElementById("timeIn").value;
  const timeOut = document.getElementById("timeOut").value;

  if (!fullName || !email || !phone || !role || !timeIn || !timeOut) {
    alert("Please fill in all fields.");
    return;
  }

  const employeeData = {
    fullName,
    email,
    phone,
    role,
    timeIn,
    timeOut,
    attendance: [{ date: new Date().toLocaleDateString(), timeIn, timeOut }]
  };

  // Fetch existing data from localStorage
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  employees.push(employeeData);

  // Save updated data back to localStorage
  localStorage.setItem("employees", JSON.stringify(employees));

  alert("Register submitted successfully!");
  document.getElementById("registerForm").reset();
});
