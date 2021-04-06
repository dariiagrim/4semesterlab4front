// let a = 5
// const b = 8
// alert(a)

// let b = "Hello"
// let c = true
// let d = null
// let e = undefined
// console.log(c)
// console.log(typeof(b), typeof(e))

// let f = prompt('What is your name?')
// console.log(f)
// let g = confirm('Do you want to exit?')
// console.log(g)

// let a = 4 + 3
// let b = "4" + "3"
// let c = 4 + "3"
// let d = "4" + 3
// console.log(a, b, c, d)

// console.log(5 == 5)
// console.log(4 > 5)
// console.log(7 <= 7)
// console.log('2' > '5')
// console.log('' == false)
// console.log('' === false)

// let a = 10
// if (a > 20) {
//     console.log(1)
// } else if (a > 15) {
//     console.log(2)
// } else {
//     console.log(3)
// }

// let a = "Hello"
// let b = a == "Hello" ? 0 : 1
// console.log(b)

// console.log(true || false)
// console.log(true && false)
// console.log(!true)

// let a = 0
// while (a < 10) {
//     console.log(a)
//     a += 1
// }

// let a = 10
// do {
//     console.log(a)
// } while (a < 5)

// for (i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for (i = 1; i <= 10; i++) {
//     console.log(i)
//     if (i > 5) {
//         continue
//     }
//     if (i == 8) {
//         break
//     }
//     console.log('apple')
// }

// function printHello() {
//     console.log('Hello')
// }
// printHello()
// printHello()

// function printHelloToName(firstName, lastName="") {
//     let string = 'Hello, '
//     string += firstName
//     string += " " + lastName
//     console.log(string)
// }
// printHelloToName('Mike')
// printHelloToName('John', "Johnson")

// function returnSum(number1, number2) {
//     return number1 + number2
// } 
// let a = returnSum(10, 10)
// console.log(a)

// let hello = function() {
//     console.log('hello')
// }
// hello()
// let a = hello
// a()


// let returnSum = (a, b) => a + b
// console.log(returnSum(5, 5))
// let printHello = () => console.log('hello')
// printHello()
// let aFewRowsArrowFunc = (a, b) => {
//     let sum = a + b
//     console.log(sum)
// }
// aFewRowsArrowFunc(7, 8)


// let student = {
//     name: "Ivan",
//     age: 24,
//     "currently studies": true
// }
// console.log(student.name)
// student.name = "Maksim"
// console.log(student.name)
// student["currently studies"] = false
// console.log("name" in student)
// for (key in student) {
//     console.log(key)
// }
// student.gender = "male"
// for (key in student) {
//     console.log(key)
// }

// let child = {
//     name: "Paul",
//     sayName() {
//         console.log(`My name is ${this.name}`)
//     }
// }
// child.sayName()

// let a = "Hello\n"
// let b = 'Hi'
// let c = `${a} and ${b}`
// console.log(c)
// console.log(b.length)
// console.log(a[2])


// let array = [1, 2, 3, "hello", true]
// console.log(array)
// console.log(array[0])
// array.pop()
// console.log(array)
// array.push(100)
// console.log(array)
// array.shift(100)
// console.log(array)
// array.unshift()
// console.log(array)
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// for (let element of array) {
//     console.log(element )
// }

// let numbers = [1, 2, 3]
// numbers.forEach((item, index, array) => console.log(item * 3))


// function multiplication(numberToMultiply) {
//     return function(multiplicator) {
//         return numberToMultiply * multiplicator
//     }
// }
// let a = multiplication(3)
// console.log(a(5))
// console.log(a(10))
// let b = multiplication(10)
// console.log(b(5))
// console.log(b(10))

// function incrementerByTwo(start) {
//     return function() {
//         return start += 2
//     }
// }
// let a = incrementerByTwo(10)
// a()
// a()
// console.log(a())
// let b = a()
// console.log(b)

// let A = (function() {
//     let b = 10
//     let c = 15 
//     function getSum() {
//         console.log(this.b + this.c)
//     }
//     function incrementer() {
//         return this.b++
//     }
//     return {
//         b: b,
//         c: c,
//         sum: getSum,
//         increment: incrementer
//     }
// })()
// console.log(A.b)
// console.log(A.c)
// A.sum()
// A.increment()
// console.log(A.b)
// A.sum()

// function changeClick(button, incrementBy) {
//     button.addEventListener('click', function() {
//         button.innerHTML = parseInt(button.innerHTML, 10) + incrementBy
//     })
// }

// let htmlButton = document.querySelector('button')
// console.log(htmlButton)
// let incrementByOne = changeClick(htmlButton, 1)
