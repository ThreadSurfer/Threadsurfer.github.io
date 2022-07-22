import katching from "./img/katching.jpg"
import lemonaid from "./img/LemonAid.jpg"
import userfetch from "./img/UserFetch-API.jpg"
import oakwood from "./img/OakwoodPacific.jpg"
import apartments from "./img/Apartments.jpg"

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

    {
        id:3,
        name: "Oakwood Pacific",
        languages: ["Liquid", "HTML", "CSS"],
        description: "A business website I created for a client",
        programs: ["Web Browser", "Shopify"],
        image: oakwood,
        videoLink: "https://www.youtube.com/embed/Hs_UMVY4kTo",
        github:"https://oakwoodpacific.com/",
        platforms: ["any"]
    },
    {
        id:4,
        name: "Apartments",
        languages: ["React", "Javascript", "HTML", "CSS", "Express"],
        description: "A fullstack apartment booking app that makes use of a local back end (running on express and MongoDB) and a responsive front end.",
        programs: ["Web Browser"],
        image: apartments,
        videoLink: "https://www.youtube.com/embed/AaVlsIn4F7o",
        github:"https://github.com/ThreadSurfer/Apartments",
        platforms: ["Desktop"]

    }


]

function getData() {
    return data;
}

function getProject(index) {
    return data[index];
}

export {getData, getProject}
