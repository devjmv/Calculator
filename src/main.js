import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const num1 = 3
const num2 = 4 

function calculator(num1, num2, operator){
    let total;
    if (operator === '+') 
    total= num1 + num2
    return total
}
function calculator(num1, num2, operator){
    let total;
    if (operator === '-') 
    total= num1 - num2
    return total
}
function calculator(num1, num2, operator){
    let total;
    if (operator === '*') 
    total= num1 * num2
    return total
}
function calculator(num1, num2, operator){
    let total;
    if (operator === '/') 
    total= num1 / num2
    return total
}
    
    

