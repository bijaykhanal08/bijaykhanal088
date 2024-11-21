 const roleSelect = document.getElementById("role-select");
    const positionSelect = document.getElementById("position-select");
    const positionOptions = document.getElementById("position-options");

    const positions = {
      "Staff": ["Principal", "Teacher"],
      "Student": ["ChildPlay / Kopila", "Nursery / Moon"]
    };

    roleSelect.addEventListener("input", function () {
      positionOptions.innerHTML = ""; // Clear existing options
      const selectedRole = roleSelect.value;

      if (positions[selectedRole]) {
        positions[selectedRole].forEach(position => {
          const option = document.createElement("option");
          option.value = position;
          positionOptions.appendChild(option);
        });
      }

      positionSelect.value = ""; // Reset the position selection
    });