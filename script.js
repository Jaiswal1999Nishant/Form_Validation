document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ValidationForm")
  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const nameError = document.getElementById("nameError")
  const emailError = document.getElementById("emailError")
  const successMessage = document.getElementById("successMessage")
  const submittedData = document.getElementById("submittedData")

  // Clear error messages when user starts typing
  nameInput.addEventListener("input", () => {
    clearError(nameInput, nameError)
  })

  emailInput.addEventListener("input", () => {
    clearError(emailInput, emailError)
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Reset previous states
    clearAllErrors()
    successMessage.classList.add("hidden")

    // Get form values
    const name = nameInput.value.trim()
    const email = emailInput.value.trim()

    let isValid = true

    // Validate name field
    if (name === "") {
      showError(nameInput, nameError, "Name is required")
      isValid = false
    }

    //Validate email field
    if (email === "") {
      showError(emailInput, emailError, "Email is required")
      isValid = false
    } else if (!email.includes("@")) {
      showError(emailInput, emailError, 'Email must contain "@" symbol')
      isValid = false
    }

    //Show result
    if (isValid) {
      showSuccess(name, email)
    } else {
      showErrorAlert("Something is Missing.")
    }
  })

  function showError(input, errorElement, message) {
    input.classList.add("error")
    errorElement.textContent = message
  }

  function clearError(input, errorElement) {
    input.classList.remove("error")
    errorElement.textContent = ""
  }

  function clearAllErrors() {
    clearError(nameInput, nameError)
    clearError(emailInput, emailError)
  }

  function showSuccess(name, email) {
    //Hide the form
    form.style.display = "none"

    //Show success message
    successMessage.classList.remove("hidden")
    submittedData.innerHTML = `
            <strong>Submitted Data:</strong><br>
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}
        `

    //Show success alert
    alert("Form submitted successfully.")

    //Reset form after 3 seconds
    setTimeout(() => {
      form.style.display = "block"
      successMessage.classList.add("hidden")
      form.reset()
    }, 3000)
  }

  function showErrorAlert(message) {
    alert("Error: " + message)
  }
})
