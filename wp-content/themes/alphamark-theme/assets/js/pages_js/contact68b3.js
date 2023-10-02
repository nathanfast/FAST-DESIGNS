const inputFileds = document.querySelectorAll('input, textarea, select');


inputFileds.forEach(input => {
  
  input.addEventListener('mouseenter', () => {
    input.parentElement.classList.add("input_hovered")
  })
  input.addEventListener('mouseleave', () => {
    input.parentElement.classList.remove("input_hovered")
  })
  input.addEventListener('focus', () => {
    input.parentElement.classList.add("input_hovered-filled")
  })
  input.addEventListener('blur', () => {
    input.parentElement.classList.remove("input_hovered-filled")
  })

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.classList.add("input_fill")
      
    } else {
      input.classList.remove("input_fill")
    }

    });
})

document.addEventListener("DOMContentLoaded", () => {
  inputFileds.forEach(inputField => {
    if(inputField.getAttribute("autofocus") === "autofocus") {

      inputField.focus();
    }
  })
})

