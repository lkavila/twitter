
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const getDate = (date) => {
    const tweetDate = new Date(date);
    const currentDate = new Date();
    const timeDiefferent = currentDate - tweetDate
    const milisecondsDay = 1000 * 60 * 60 * 24

    if (currentDate.getFullYear() > tweetDate.getFullYear()) {
        return `${monthNames[tweetDate.getMonth()]} ${tweetDate.getDay()}, ${tweetDate.getFullYear()}`

    } else if (timeDiefferent > milisecondsDay) {
        return `${monthNames[tweetDate.getMonth()]} ${tweetDate.getDay()}`

    } else if (timeDiefferent > milisecondsDay / 24 && timeDiefferent <= milisecondsDay) {
        return `${tweetDate.getHours()}h`

    } else if (timeDiefferent > milisecondsDay / (24 * 60) && timeDiefferent <= milisecondsDay / 24) {
        return `${tweetDate.getMinutes()}m`

    } else if (timeDiefferent > milisecondsDay / (24 * 60 * 60) && timeDiefferent <= milisecondsDay / (24 * 60)) {
        return `${tweetDate.getSeconds()}s`
    }
}

export default getDate;