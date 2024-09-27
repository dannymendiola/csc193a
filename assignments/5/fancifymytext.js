document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mooBtn').style.marginTop = "1rem"
})

const cBiggerBtn = () => {
    document.getElementById('text').style.fontSize = "24pt"
}

const styleText = (fancy) => {
    const text = document.getElementById('text')

    if (fancy) {
        text.style.fontWeight = "bold"
        text.style.color = "blue"
        text.style.textDecoration = "underline"
    } else {
        text.style.fontWeight = "normal"
        text.style.color = "black"
        text.style.textDecoration = "none"
    }
}

const cMooBtn = () => {
    const text = document.getElementById('text')
    let input = text.value

    text.value = `${input
        .trim()
        .replace(/\s+/g, " ")
        .toUpperCase()
        .split(" ")
        .join("-Moo ")}-Moo`
}