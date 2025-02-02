document.getElementById("registerForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    role: document.getElementById("role").value,
    timeIn: document.getElementById("timeIn").value,
    timeOut: document.getElementById("timeOut").value,
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwuFbIV_axObGIn0OkpdZ4NdW1ksiE8YqVSw4dPmwg0Asbx4ReLoaObbbYGnnsGSnQ6/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Data submitted successfully!");
  } catch (error) {
    console.error("Error submitting data:", error);
    alert("Failed to submit data.");
  }
});

