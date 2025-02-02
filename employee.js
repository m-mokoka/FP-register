// Get the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const employeeName = urlParams.get("name");

// Select HTML elements
const nameElement = document.getElementById("employee-name");
const emailElement = document.getElementById("employee-email");
const numberElement = document.getElementById("employee-number");
const roleElement = document.getElementById("employee-role");
const daysWorkedElement = document.getElementById("days-worked");
const attendanceBody = document.getElementById("attendance-body");

if (!employeeName) {
  nameElement.textContent = "No employee data available.";
} else {
  displayEmployeeDetails(employeeName);
}

function displayEmployeeDetails(name) {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employee = employees.find(emp => emp.fullName === name);

  if (!employee) {
    nameElement.textContent = "Employee not found.";
    return;
  }

  // Populate employee details
  nameElement.textContent = employee.fullName;
  emailElement.textContent = employee.email;
  numberElement.textContent = employee.phone;
  roleElement.textContent = employee.role;
  daysWorkedElement.textContent = employee.attendance.length;

  // Populate attendance records in the table
  attendanceBody.innerHTML = employee.attendance.map(record => `
    <tr>
      <td>${record.date}</td>
      <td>${record.timeIn}</td>
      <td>${record.timeOut}</td>
    </tr>
  `).join("");
}

// Reset attendance records
function resetAttendance() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employeeIndex = employees.findIndex(emp => emp.fullName === employeeName);

  if (employeeIndex > -1) {
    employees[employeeIndex].attendance = [];
    localStorage.setItem("employees", JSON.stringify(employees));
    daysWorkedElement.textContent = "0";
    attendanceBody.innerHTML = "";
    alert("Attendance has been reset.");
  }
}

// Download report as a PDF
function downloadReport() {
  const reportContent = `
    Employee Name: ${nameElement.textContent}
    Email: ${emailElement.textContent}
    Number: ${numberElement.textContent}
    Role: ${roleElement.textContent}
    Days Worked: ${daysWorkedElement.textContent}
    Attendance Records:
    ${Array.from(attendanceBody.rows).map(row => `
      Date: ${row.cells[0].textContent}, 
      Time In: ${row.cells[1].textContent}, 
      Time Out: ${row.cells[2].textContent}
    `).join("\n")}
  `;

  const blob = new Blob([reportContent], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${employeeName}-AttendanceReport.txt`;
  link.click();
}

// Delete employee record
function deleteEmployee() {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  employees = employees.filter(emp => emp.fullName !== employeeName);

  localStorage.setItem("employees", JSON.stringify(employees));
  alert("Employee has been deleted.");
  window.location.href = "admin.html";
}
