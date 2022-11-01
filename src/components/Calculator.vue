<script setup>
import { ref } from "vue";

let operandOne = ref("");
let operandTwo = ref("");
let operation = ref("");
let result = ref(0);

const setOperand = (operand) => {
  if (operation.value === "") {
    operandOne.value += operand;
    result.value = operandOne.value;
  } else {
    operandTwo.value += operand;
    result.value = operandTwo.value;
  }
};

const setOperator = (operator) => {
  operation.value = operator;
  result.value = operator;
};

const getResult = () => {
  switch (operation.value) {
    case "-":
      result.value = operandOne.value - operandTwo.value;
      break;
    case "+":
      result.value = parseInt(operandOne.value, 10) + parseInt(operandTwo.value, 10);
      break;
    case "/":
      result.value = operandOne.value / operandTwo.value;
      break;
    case "*":
      result.value = operandOne.value * operandTwo.value;
      break;
  }
}
</script>

<template>
  <div class="calculator-container">
    <label class="display">{{ result }}</label>
    <button v-for="operand in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" @click="setOperand(operand)">{{ operand }}</button>
    <button v-for="operator in ['-', '*', '/', '+']" @click="setOperator(operator)">{{ operator }}</button>
    <button @click="getResult()">=</button>
  </div>
</template>


<style scoped>
.calculator-container {
  display: grid;
  width: 50%;
  gap: 0.25rem;
  grid-template-columns: repeat(5, 1fr);
}

.calculator-container .display {
  grid-column: 1 / span 5;
  text-align: right;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: white;
  font-size: 2rem;
}

.calculator-container button {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: black;
  font-size: 1.5rem;
  background-color: grey;
}
</style>