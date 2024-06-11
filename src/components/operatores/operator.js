function calculator(num1, num2,operator){
    //comprobar si es number
    if (num1, num2 !== Number.isNaN()
        if (operator == '+')
            return suma(num1, num2)

        if (operator == '-')
            return resta(num1, num2)

        if (operator == '*')
            return multiplica(num1, num2)

        if (operator == '/' && num2 != 0)
            return division(num1, num2)
        
    )
}

export function suma(num1, num2) {
    return num1 + num2
}

export function resta(num1, num2) {
    return num1 - num2
}

export function multiplica(num1, num2) {
    return num1 * num2
}

export function division(num1, num2) {
    if (num2 !== 0)
        return num1/num2
    else{
        return ('')
    }
    return num1 * num2
}