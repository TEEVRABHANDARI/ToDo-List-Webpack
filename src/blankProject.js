export const blankDocument = () => {
    console.log("blank pages")
    let projectsArray = []
    console.log(projectsArray)
    let projectTitle = "default project";
    projectsArray.push({projectTitle})
    console.log(projectsArray)
    return { projectsArray , projectTitle}
}