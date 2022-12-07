const generateButton = document.querySelector('.generate-advice')
const url = 'https://api.adviceslip.com/advice';
const adviceID = document.querySelector('.advice-id')
const adviceText = document.getElementById('advice-text')
generateButton.addEventListener('click',getRandomAdvice)


async function getRandomAdvice(){
    const resp = await fetch(url)
    const {slip :{advice,id}} = await resp.json()

    adviceID.innerHTML = `ADVICE #${id}`;
    adviceText.textContent = advice
}

getRandomAdvice()