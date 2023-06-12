let todo = [];
function addTo(){
    const input = document.getElementById('add');
    const list = document.getElementById('list');

    todo.push(input.value);
    //input value is empty because after typing the input area must be cleared
    input.value = '';
    updateList(list);
    function updateList(list){
        //list innerHTML is empty becuase if it is not done then the previous task and the current task both will get printed on the screen
        list.innerHTML = '';
        todo.forEach(tod => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(tod));
            list.appendChild(li);
        })
    }
}