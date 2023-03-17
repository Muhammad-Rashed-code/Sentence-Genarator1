function kanyeRest() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(json => displayKanye(json))
}

function displayKanye(users) {
    document.getElementById('show').innerText = users.quote


}