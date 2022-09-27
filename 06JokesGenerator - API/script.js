const jokesAPI = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const jokeElement = document.querySelector("#joke");

const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click", getJoke);

// function to get joke
async function getJoke() {

    try {
        const response = await fetch(jokesAPI);
        const jokeJSON = await response.json();
        
        console.log(jokeJSON);

        // destructure object
        const { joke } = jokeJSON;

        // set to div
        jokeElement.innerText = joke;
    } catch (error) {
        console.error(error);
    }

}

getJoke();