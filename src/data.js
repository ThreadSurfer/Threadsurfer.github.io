const data = [
    {
        name: "Katching",
        languages: ["Java", "XML"],
        description: "A banking app that allows a user to send/receive funds and view transactions. An admin can see transactions and delete users. ",
        programs: ["Android Studio"],
        platforms: ["Windows", "MacOS", "Android"],
    },
    {
        name: "LemonAid",
        languages: ["Java", "XML"],
        description: "A health app that allows users to find a doctor using their area code and send messages to them",
        programs: ["Android Studio"],
        platforms: ["Windows", "MacOS", "Android"]
    }

]

function getData() {
    return data;
}

export default getData;