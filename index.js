import knapSack from "./knapsack.js";
// let val = [60, 100, 120];
// let wt = [10, 20, 30];
// let W = 50;
// let n = val.length;

const itemsList = document.querySelector('.itemsList')
const weightInput = document.getElementById('weight')
const costInput = document.getElementById('cost')
const values = [];
const weigths = [];



let counter = 1;

function addItem() {

    const weight = parseInt(weightInput.value);
    const cost = parseInt(costInput.value);

    if (isNaN(weight) || isNaN(cost)) {
        return;
    }
    console.log(weight, cost);

    weigths.push(weight);
    values.push(cost);
    const liElement = document.createElement('li');
    liElement.className = "item bg-green-200 w-1/4 text-lg p-4"

    const divElement = document.createElement('div');

    divElement.innerHTML = `<div>Item ${counter++}</div> Peso: ${weight} kg Precio: ${cost}$`
    liElement.append(divElement)

    itemsList.append(liElement);

    weightInput.value = '';
    costInput.value = ''


}


function calculateKnap() {
    let W = parseInt(document.getElementById('maxWeightInput').value);
    let n = values.length;



    const knap = knapSack(W, weigths, values, n);


    const items = document.querySelectorAll('.item');



    knap.selectedItems.forEach(item => {
        const index = weigths.indexOf(item);


        items[index].style.backgroundColor = "red";
        items[index].style.color = 'white';
    })

    document.getElementById('maxValue').textContent = `${knap.maxGain}$`;



    console.log(knap);
}

document.getElementById('addItem').addEventListener('click', addItem);
document.getElementById('calcularBtn').addEventListener('click', calculateKnap);