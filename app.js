function dragstart(event) {
  console.log("dragstart");
  const target = event.target;
  if (target instanceof HTMLElement) {
    target.classList.add("hold");
    setTimeout(() => {
      target.classList.add("hide");
    }, 0);
  }
}

function dragend(event) {
  console.log("dragend");
  const target = event.target;
  if (target instanceof HTMLElement) {
    target.classList.remove("hold", "hide");
  }
}

function dragover(event) {
  console.log("dragover");
  event.preventDefault();
}

function dragenter(event) {
  console.log("drag enter");
  const target = event.target;
  if (target instanceof HTMLElement) {
    target.classList.add("hovered");
  }
}

function dragleave(event) {
  console.log("dragleave");
  const target = event.target;
  if (target instanceof HTMLElement) {
    target.classList.remove("hovered");
  }
}

function drop(event) {
  console.log("drop");

  const target = event.target;
  if (target instanceof HTMLElement) {
    target.append(item);
    target.classList.remove("hovered");
  }
}

const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);
});
