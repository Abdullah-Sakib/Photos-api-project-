document.getElementById('search-btn').addEventListener('click',()=>{
  const searchField = document.getElementById('search-field').value;
  loadData(searchField);
});

document.getElementById('search-field').addEventListener("keypress",(e) => {
  const searchField = document.getElementById('search-field').value;
  if(e.key === 'Enter'){
    loadData(searchField);
  }
})

const loadData = id => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
  .then(res => res.json())
  .then(data => displayData(data.drinks))
}


const displayData = data => {
  console.log(data);
  const cardContainer = document.getElementById('card-container');
  cardContainer.textContent = '';
  const nothingFound = document.getElementById('nothing-found');
  if(data === null){
    nothingFound.classList.remove('d-none');
    return;
  }
  else{
    nothingFound.classList.add('d-none');
  }
  data.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
        <img src="${element.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.strDrink}</h5>
          <p class="card-text">${element.strInstructions.slice(0,180)}</p>
        </div>
    </div>
    `;
    cardContainer.appendChild(div);
  });
}