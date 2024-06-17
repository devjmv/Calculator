<template>
    <div class="calculator card">

      <input type="text" class="calculator-screen z-depth-1" value="" disabled />

      <div class="calculator-keys">

        <button type="button" class="operator btn btn-info" value="+">+</button>
        <button type="button" class="operator btn btn-info" value="-">-</button>
        <button type="button" class="operator btn btn-info" value="*">&times;</button>
        <button type="button" class="operator btn btn-info" value="/">&divide;</button>

        <button type="button" value="7" class="btn btn-light">7</button>
        <button type="button" value="8" class="btn btn-light">8</button>
        <button type="button" value="9" class="btn btn-light">9</button>


        <button type="button" value="4" class="btn btn-light">4</button>
        <button type="button" value="5" class="btn btn-light">5</button>
        <button type="button" value="6" class="btn btn-light">6</button>


        <button type="button" value="1" class="btn btn-light">1</button>
        <button type="button" value="2" class="btn btn-light">2</button>
        <button type="button" value="3" class="btn btn-light">3</button>


        <button type="button" value="0" class="btn btn-light">0</button>
        <button type="button" class="decimal function btn btn-secondary" value=".">.</button>
        <button type="button" class="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>

        <button type="button" class="equal-sign operator btn btn-default" value="=">=</button>

        <button type="button" class="operator btn btn-info" value="MR">MR</button>
        <button type="button" class="operator btn btn-info" value="M+">M+</button>
        <button type="button" class="operator btn btn-info" value="MC">MC</button>

      </div>
    </div>
</template>

<style scoped>

.calculator {
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
}

.calculator-screen {
  width: 100%;
  height: 80px;
  border: none;
  background-color: #252525;
  color: #fff;
  text-align: right;
  padding-right: 20px;
  padding-left: 10px;
  font-size: 4rem;
}

button {
  height: 60px;
  font-size: 2rem !important;
}

.equal-sign {
  height: 98%;
  grid-area: 2 / 4 / 6 / 5;
}

.calculator-keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 20px;
}
</style>
