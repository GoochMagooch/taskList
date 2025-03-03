let one = document.getElementById('task-one')
let oneValue = one.innerText
let two = document.getElementById('task-two')
let twoValue = two.innerText
let three = document.getElementById('task-three')
let threeValue = three.innerText

let input = document.getElementById('input')
let inputValue = input.value

let taskOne = false
let taskTwo = false
let taskThree = false

function addTask() {
    if (!taskOne) {
        one.textContent += ' ' + input.value
        taskOne = true
        input.value = ''
    } else if (!taskTwo) {
        two.textContent += ' ' + input.value
        taskTwo = true
        input.value = ''
    } else if (!taskThree) {
        three.textContent += ' ' + input.value
        taskThree = true
        input.value = ''
    } else {
        alert("No more tasks may be added!")
        input.value = ''
    }
}

function clearTasks() {
    one.textContent = oneValue
    two.textContent = twoValue
    three.textContent = threeValue
    input.value = ''
    taskOne = false
    taskTwo = false
    taskThree = false
}