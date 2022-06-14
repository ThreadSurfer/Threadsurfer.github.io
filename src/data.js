import katching from "./img/katching.jpg"
import lemonaid from "./img/LemonAid.jpg"
import userfetch from "./img/UserFetch-API.jpg"

const data = [
    {
        id: 0,
        name: "Katching",
        languages: ["Java", "XML"],
        description: "A banking app that allows a user to send/receive funds and view transactions. An admin can see transactions and delete users. ",
        programs: ["Android Studio"],
        videoLink: "https://www.youtube.com/embed/uKWO56pE1Ag",
        image: katching,
        github: "https://github.com/ThreadSurfer/LemonAid",
        platforms: ["Android"],

    },
    {
        id: 1,
        name: "LemonAid",
        languages: ["Java", "XML"],
        description: "A health app that allows users to find a doctor using their area code and send messages to them",
        programs: ["Android Studio"],
        image: lemonaid,
        videoLink: "https://www.youtube.com/embed/Br66IFqu3Es",
        github: "https://github.com/tatacsd/CSIS4175_Project",
        platforms: ["Android"]
    },
    {
        id:2,
        name: "UserFetch-API",
        languages: ["Javascript", "HTML"],
        description: "A fetch request call that populates 12 users on a web page",
        programs: ["Web Browser", "VSCode"],
        image: userfetch,
        videoLink: "https://www.youtube.com/embed/j3bc6d4cTaA",
        github:"https://github.com/ThreadSurfer/UserFetch-API-project",
        platforms: ["any"]
    },


]

function getData() {
    return data;
}

function getProject(index) {
    return data[index];
}

export {getData, getProject}