const api = "https://www.breakingbadapi.com/api/characters";
async function getInfoChar(){
    try {
        const response = await fetch(api);
        const data = await response.json();
        document.getElementById("selectActor").innerHTML = 
    `   <select onchange="getCh(this.value)">
        <option>please select actor</option>
        ${data.map((actor) => `<option>${actor.name}</option>`)}
        </select>
    `
    } catch (e) {
        console.log("error", e.message)   
    }
}
getInfoChar();
async function getCh(e){
    if (e !== 'please select actor') {
    const response = await fetch(`${api}?name=${e}`)
    const data = await response.json()
    console.log(data[0])
    document.getElementById('imageActor').src = data[0].img
    document.getElementById('name').innerText = data[0].name
    document.getElementById('nickname').innerText = data[0].nickname
    document.getElementById('birthday').innerText = data[0].birthday
    document.getElementById('portrayed').innerText = data[0].portrayed       
    }
}