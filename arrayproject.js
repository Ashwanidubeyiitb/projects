const todolist = [{
    name: 'dinner',
    duedate:'2023-12-22'
}];
rendertodolit();
function rendertodolit() {


    let todohtnl = '';
    for (let i = 0; i < todolist.length; i++) {
        const todoobject = todolist[i];
        const name=todoobject.name;
        //const {name,duedate}= todoobject;
        const duedate=todoobject.duedate;
        const html = 
        `<p>
        ${name} ${duedate}
        <button onclick="todolist.slice(${i},1);
        rendertodolit()";
        >delete</button>
        </p>`
        todohtnl += html;
    }
    console.log(todohtnl);
    document.querySelector('.jstodolist').innerHTML = todohtnl;
}
function addtodo() {
    const inputelement = document.querySelector('.jsnamein');
    const name = inputelement.value;

    todolist.push(name);
    console.log(todolist);


    inputelement.value = '';
    rendertodolit();

}