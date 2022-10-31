<script setup>
import { ref } from "vue";

let operandOne = ref(0);
let operandTwo = ref(0);
let operation = ref("");
let result = ref(0);

const setOperand = (operand) => {
  if (operation.value === "") {
    operandOne.value = operand;
  } else {
    operandTwo.value = operand;
  }
};

const setOperator = (operator) => {
  operation.value = operator;
};

const getResult = () => {
  switch (operation.value) {
    case "-":
      result.value = operandOne.value - operandTwo.value;
      break;
    case "+":
      result.value = operandOne.value + operandTwo.value;
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
    <label class="display">0</label>
    <button v-for="operand in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" @click="setOperand(operand)">{{ operand }}</button>
    <button v-for="operator in ['-', '*', '/', '+']" @click="setOperator(operator)">{{ operator }}</button>
    <button @click="getResult()">=</button>
  </div>

  {{ operandOne }}
  {{ operandTwo }}
  {{ operation }}
  {{ result }}
</template>


<style scoped>
.calculator-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.calculator-container .display {
  grid-column: 1 / span 5;
}
</style>