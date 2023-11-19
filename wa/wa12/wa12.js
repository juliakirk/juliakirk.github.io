const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

const quote = document.querySelector('#js-quote-text');
let author = document.querySelector('#js-author-text');

let answer = '';

// this is the endpoint for the API that we want to get a reponse from

const endpoint = 'https://api.quotable.io';

async function getQuote() {
   try {
        const response = await fetch(endpoint+'/quotes/random');
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json[0]["content"])
        quote.textContent = json[0]["content"];
        author.textContent = json[0]['author'];
        authName = json[0]['author'];
        authorSlug = json[0]['authorSlug'];
        const resp = await fetch(endpoint + '/quotes?author='+ authorSlug);
        if (!resp.ok) {
            throw Error(resp.statusText);
        }
        const counter = await resp.json();
        count = counter['count']
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }

}

// this function shows the question
function displayQuote(question) {
    question;
}

// this function shows the answer
function displayAnswer() {
    author.textContent = '';
    quote.textContent = authName + " has " + count + " famous quotes in this api!";
}

// we run getQuote once when the script first loads to populate a question
// when the page is loading
getQuote();