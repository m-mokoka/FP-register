function populateWidgets() {
  const tdrContainer = document.getElementById("tdr-widgets");
  const agentContainer = document.getElementById("agent-widgets");
  const promoterContainer = document.getElementById("promoter-widgets");

  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  employees.forEach(employee => {
    const widget = document.createElement("div");
    widget.classList.add("employee-widget");
    widget.textContent = employee.fullName;

    widget.addEventListener("click", () => {
      window.location.href = `employee.html?name=${encodeURIComponent(employee.fullName)}`;
    });

    switch (employee.role) {
      case "TDR":
        tdrContainer.appendChild(widget);
        break;
      case "Agent":
        agentContainer.appendChild(widget);
        break;
      case "Promoter":
        promoterContainer.appendChild(widget);
        break;
    }
  });
}

populateWidgets();
