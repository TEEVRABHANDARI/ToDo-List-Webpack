import { blankDocument } from "./blankProject";

export const intialDom = () => {

    //DOM default heading
    const contentDiv = document.querySelector("#content")
    const heading = document.createElement("h1")
    heading.textContent = "To-Do list"
    contentDiv.appendChild(heading)

    //Dom default project
    // const contentDiv = document.querySelector("#content")
    const project = document.createElement("div")
    project.textContent = blankDocument().projectTitle
    contentDiv.appendChild(project)
}