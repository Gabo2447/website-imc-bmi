// >> src/index.ts <<
function getIMC(weight: number, size: number): number {
  return weight / size ** 2;
}

const form = document.getElementById("calculator");
const data = document.getElementById("result") as HTMLDivElement;

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const sizeInput = document.getElementById("size") as HTMLInputElement;
  const weightInput = document.getElementById("weight") as HTMLInputElement;

  const sizeValueClean = sizeInput.value
    .replace(",", ".")
    .trim()
    .replace("m", "")
    .trim();
  const weightValueClean = weightInput.value
    .replace(",", ".")
    .trim()
    .replace("kg", "")
    .trim();

  const numSize = Number(sizeValueClean);
  const numWeight = Number(weightValueClean);

  if (isNaN(numSize) || isNaN(numWeight) || numSize <= 0 || numWeight <= 0) {
    data.innerHTML =
      '<p class="text-red-600 border rounded-lg bg-red-600/20 px-2 py-1">Por favor, introduce valores numéricos válidos y positivos.</p>';
    return;
  }

  data.innerHTML = "";
  const IMC = getIMC(numWeight, numSize);

  const resultP = document.createElement("p");
  resultP.innerHTML = `Tu IMC es de <strong>${IMC.toFixed(2)}</strong>`;

  resultP.className =
    "mt-2 text-green-600 bg-green-600/20 border rounded-lg border-green-600 px-2 py-1 font-semibold text-2xl";
  data.appendChild(resultP);
});
