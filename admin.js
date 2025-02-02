async function fetchEmployeeData() {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwuFbIV_axObGIn0OkpdZ4NdW1ksiE8YqVSw4dPmwg0Asbx4ReLoaObbbYGnnsGSnQ6/exec");
    const data = await response.json();

    data.slice(1).forEach((row) => {
      console.log("Employee:", row);
      // Populate the admin page with employee data
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchEmployeeData();

