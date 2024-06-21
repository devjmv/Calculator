<template>
  <div class="calculator card">

    <div class="calculator-screen z-depth-1">{{ current || '0' }}</div>

    <div class="calculator-keys">

      <button @click="add()" type="button" class="operator btn btn-info" value="+">+</button>
      <button @click="minus()" type="button" class="operator btn btn-info" value="-">-</button>
      <button @click="times()" type="button" class="operator btn btn-info" value="*">&times;</button>
      <button @click="divide()" type="button" class="operator btn btn-info" value="/">&divide;</button>

      <button @click="append('7')" type="button" value="7" class="btn btn-light">7</button>
      <button @click="append('8')" type="button" value="8" class="btn btn-light">8</button>
      <button @click="append('9')" type="button" value="9" class="btn btn-light">9</button>


      <button @click="append('4')" type="button" value="4" class="btn btn-light">4</button>
      <button @click="append('5')" type="button" value="5" class="btn btn-light">5</button>
      <button @click="append('6')" type="button" value="6" class="btn btn-light">6</button>


      <button @click="append('1')" type="button" value="1" class="btn btn-light">1</button>
      <button @click="append('2')" type="button" value="2" class="btn btn-light">2</button>
      <button @click="append('3')" type="button" value="3" class="btn btn-light">3</button>


      <button @click="append('0')" type="button" value="0" class="btn btn-light">0</button>
      <button @click="dot()" type="button" class="decimal function btn btn-secondary" value=".">.</button>
      <button @click="clear()" type="button" class="all-clear function btn btn-danger btn-sm"
        value="all-clear">C</button>

      <button @click="equal()" type="button" class="equal-sign operator btn btn-default" value="=">=</button>

      <button @click="memory()" type="button" class="operator btn btn-info" value="MR">MR</button>
      <button @click="memoryPluss()" type="button" class="operator btn btn-info" value="M+">M+</button>
      <button @click="memoryClear()" type="button" class="operator btn btn-info" value="MC">MC</button>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    clear() {
      this.current = '';
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ?
        this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => b / a;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    },
    memory() {
      this.current = '';
    },
    memoryClear() {
      this.current = '';
    },
    memoryPluss() {
      this.current = '';
    }
  }
}
</script>

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
