async function fetchPhonetic() {

    try{
        
        console.log("Test")
        const input = document.getElementById("wordInput").value.toLowerCase()
        console.log("Fetching API:")
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
        const responseJs = await response.json()

        console.log(responseJs[0])

        const phonetic = await responseJs[0].meanings[0].definitions[0].definition
        console.log(phonetic)
        document.getElementById("phonetic").textContent = `Definition: ${phonetic}`


    }
    catch(error){
        console.log(error)
    }

}
async function test(){

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
    const responseJs = await response.json()
    console.log(responseJs[0].meanings[0].definitions[0].definition)

}
test()