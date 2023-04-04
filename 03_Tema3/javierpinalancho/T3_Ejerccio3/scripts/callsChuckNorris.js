class callsChuckNorris {

    static async showMessage() {
        let url = "https://api.chucknorris.io/jokes/random";
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let jsonData = await response.json();
        document.getElementById("funnyWords").innerHTML = jsonData.value;
    }
}



