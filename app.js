const guessGame = {};

guessGame.init = () => {
  guessGame.setUpEventListeners();
  guessGame.getSeason('season 1');
}

guessGame.getSeason = (query) => {
const url = new URL(`http://www.nokeynoshade.party/api/seasons/${query}/queens`);
url.search = new URLSearchParams({
  season: query
});
console.log(url)

// fetch some queens
fetch(url)
.then( (results) => results.json() )
.then( (data) => {
  guessGame.displayQueens(data);
  console.log(data)
});
}
// const queens = (data[0].image_url);

// for ( let i = 0;  i < queens.length; i++){
//   console.log(data[i].image_url)
//   guessGame.displayQueens(data[i].image_url)
// }


// show queens on page
guessGame.displayQueens = (aQueen) => {
  const cardElement = document.querySelector('#playerCard');
  cardElement.innerHTML= ``;
  aQueen.forEach((data) => {
    const queenCard = document.createElement(`div`);
    queenCard.classList.add('queen');
    const whoIsShe = document.createElement(`h2`);
    whoIsShe.textContent = data.name;
    const queenPhoto = document.createElement(`img`);
    queenPhoto.src = data.image_url;
    queenCard.appendChild(queenPhoto);
    queenCard.appendChild(whoIsShe);
    cardElement.appendChild(queenCard);
  });
}


// select season
guessGame.setUpEventListeners = () => {
  document.querySelector(`#season`).addEventListener('change', function() {
    guessGame.getSeason(this.value);
  });
}

guessGame.init();
