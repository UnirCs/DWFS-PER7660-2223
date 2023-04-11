var url = "https://api.chucknorris.io/jokes/random";
function llenadoAsincrono() {
    let chiste1 = "hola";
    let setOfValue = new Set();
    fetch(url).then(response => response.json()).then(json => setOfValue.add(json.value));
    const procesarSet = (setVal) => {
        console.log("Values: " + Array.from(setVal));
        chiste1 = Array.from(setVal)[0];
    };
    setTimeout(() => procesarSet(setOfValue), 5000);
}

function llenadoSincrono() {
    (async () => {
        let chisteSincrono = await fetchSincrono();
        console.log(chisteSincrono);
        console.log(typeof(chisteSincrono));
    })();
}
async function fetchSincrono() {
    let fetchResponse = await fetch(url);
    let json = await fetchResponse.json();
    let chiste = json.value;
    console.log("Fact sincrono: " + chiste);
    return chiste;
}
llenadoSincrono();