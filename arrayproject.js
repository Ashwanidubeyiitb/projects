const todolist = [];
for(let i=0; i<todolist.length; i++){
    const todo=todolist[i];

}
function addtodo() {
    const inputelement=document.querySelector('.jsnamein');
    const name=inputelement.value;

    todolist.push(name);
    console.log(todolist);


    inputelement.value='';

}