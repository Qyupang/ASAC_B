//id 사용
let inputBox = document.getElementById("inputBox");
let addTodo = document.getElementById('addTodo');
let todoList = document.getElementById('todoList');

//이벤트 감지
    addTodo.addEventListener('click', function () {
        const list = document.createElement('li');

        if (!inputBox.value) {
            alert('할 일을 입력해주세요.');
        }
        else {
            list.innerText = inputBox.value;
            todoList.appendChild(list);
            inputBox.value = "";
        }

        list.addEventListener('click', function () {
            list.style.textDecoration = 'line-through';
        })

        list.addEventListener('dblclick', function () {
            todoList.removeChild(list);
        })
    })