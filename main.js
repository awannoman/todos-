import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what do you want to add in your todos ?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more todos ?",
            default: false,
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addmore;
    console.log(todos);
}
