const ratingCard = document.querySelector('.card-container.rating')
const thanksCard = document.querySelector('.card-container.thanks')
const ratingScores = document.querySelectorAll('.rating-score')
const btn = document.querySelector('.btn-card')
const ratingThanks = document.querySelector('.rating-thanks')
let activeScoreValue = null

window.onload = () => {

    thanksCard.style.display = 'none'

    for (let score of ratingScores) {
        score.addEventListener('click', () => {
            removeRatingColor()
            score.classList.add('active')
            activeScoreValue = checkScore()
        })
    }

    //Remove the color of all scores
    function removeRatingColor() {
        for (let score of ratingScores) {
            score.classList.remove('active')
        }
    }

    //Goes to the 'thanks' display
    btn.addEventListener('click', () => { 
        if (activeScoreValue) {
            ratingThanks.innerText = `You selected ${activeScoreValue} out of 5`
            ratingCard.style.display = 'none'
            thanksCard.style.display = 'flex'
        }
    })

    //Check the active score value
    function checkScore() {
        for (let score of ratingScores) {
            if (score.classList.contains('active')) {
                return score.innerText
            }
        }
    }
}