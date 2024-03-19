let toDoArray = [];


export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    console.log("Called createToDo module...creating todo now");
    console.log({ Title, Description, DueDate, Priority, CheckList });
    console.log("Pushing this object to the toDoArray....");
    toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
    console.log(toDoArray);
    return { Title, Description, DueDate, Priority, CheckList };
}