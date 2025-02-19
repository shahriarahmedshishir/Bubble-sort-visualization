let array = [];

function createCircles(arr) {
  const container = document.getElementById("barContainer");
  container.innerHTML = "";
  arr.forEach((value) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = value;
    container.appendChild(circle);
  });
}

async function bubbleSort() {
  let circles = document.getElementsByClassName("circle");
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      circles[j].style.backgroundColor = "red";
      circles[j + 1].style.backgroundColor = "red";
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        circles[j].style.transform = "translateX(50px)";
        circles[j + 1].style.transform = "translateX(-50px)";

        await new Promise((resolve) => setTimeout(resolve, 300));

        createCircles(array);
        circles = document.getElementsByClassName("circle");
      }

      circles[j].style.backgroundColor = "#C890A7";
      circles[j + 1].style.backgroundColor = "#C890A7";
      circles[j].style.transform = "translateX(0)";
      circles[j + 1].style.transform = "translateX(0)";
    }
  }
}

function startSorting() {
  const input = document.getElementById("arrayInput").value;
  array = input.split(",").map(Number);
  if (array.length !== 20 || array.some(isNaN)) {
    alert("Please enter exactly 20 valid numbers, separated by commas.");
    return;
  }
  createCircles(array);
  bubbleSort();
}
