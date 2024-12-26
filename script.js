// Function to calculate project status
function calculateStatus(startDate, endDate) {
    const today = new Date();
    if (today > new Date(endDate)) {
      return "Delayed";
    } else {
      return "On-time";
    }
  }
  
  // Function to create table rows
  function createTableRow(project) {
    const row = document.createElement('tr');
  
    const nameCell = document.createElement('td');
    nameCell.textContent = project.name;
    row.appendChild(nameCell);
  
    const amountCell = document.createElement('td');
    amountCell.textContent = project.amount;
    row.appendChild(amountCell);
  
    const developerCell = document.createElement('td');
    developerCell.textContent = project.developer;
    row.appendChild(developerCell);
  
    const userCell = document.createElement('td');
    userCell.textContent = project.user;
    row.appendChild(userCell);
  
    const startDateCell = document.createElement('td');
    startDateCell.textContent = project.startDate;
    row.appendChild(startDateCell);
  
    const endDateCell = document.createElement('td');
    endDateCell.textContent = project.endDate;
    row.appendChild(endDateCell);
  
    const statusCell = document.createElement('td');
    statusCell.textContent = calculateStatus(project.startDate, project.endDate);
    row.appendChild(statusCell);
  
    // Apply color-coding
    if (statusCell.textContent === "Delayed") {
      row.classList.add("red");
    } else {
      row.classList.add("green");
    }
  
    return row;
  }
  
  // Sample project data (replace with your actual data source)
  const projects = [
    {
      name: "Project A",
      amount: 10000,
      developer: "John Doe",
      user: "Jane Smith",
      startDate: "2024-07-01",
      endDate: "2024-12-31",
    },
    {
      name: "Project B",
      amount: 5000,
      developer: "Alice Johnson",
      user: "Bob Brown",
      startDate: "2024-05-15",
      endDate: "2024-10-15",
    },
    // Add more projects here
  ];
  
  // Populate the table
  const tableBody = document.getElementById('projectTable');
  projects.forEach(project => {
    const row = createTableRow(project);
    tableBody.appendChild(row);
  });