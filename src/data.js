const data = [
    {
        name: "Katching",
        languages: ["Java", "XML"],
        description: "A banking app that allows a user to send/receive funds and view transactions. An admin can see transactions and delete users. ",
        programs: ["Android Studio"],
        platforms: ["Android"],

    },
    {
        name: "LemonAid",
        languages: ["Java", "XML"],
        description: "A health app that allows users to find a doctor using their area code and send messages to them",
        programs: ["Android Studio"],

        platforms: ["Android"]
    },
    {
        name: "UserFetch-API",
        languages: ["Javascript", "HTML"],
        description: "A fetch request call that populates 12 users on a web page",
        programs: ["Web Browser", "VSCode"],
        platforms: ["any"]
    },


]

function getData() {
    return data;
}

export default getData;