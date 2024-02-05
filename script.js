const btnsCont = document.querySelector(".btns");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const steps = [...document.querySelectorAll(".numbers")];

nextBtn.addEventListener("click", function () {
  const firstNotActived = steps.find(el => !el.classList.contains("active"));
  firstNotActived.classList.add("active");

  //* Add disabled attributes
  prevBtn.disabled = false;
  if (steps.every(el => el.classList.contains("active"))) {
    nextBtn.setAttribute("disabled", "true");
  }
});

prevBtn.addEventListener("click", function () {
  const LastActived = steps.findLast(el => el.classList.contains("active"));
  LastActived.classList.remove("active");

  //* Add disabled attributes
  nextBtn.disabled = false;
  if (LastActived.textContent === "2") {
    prevBtn.setAttribute("disabled", "true");
  }
});
