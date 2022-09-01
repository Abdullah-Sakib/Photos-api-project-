document.getElementById('search-btn').addEventListener('click',()=>{
  toggleSpinner(true);
  const searchField = document.getElementById('search-field').value;
  loadData(searchField);
});

document.getElementById('search-field').addEventListener("keypress",(e) => {
  const searchField = document.getElementById('search-field').value;
  if(e.key === 'Enter'){
    toggleSpinner(true);
    loadData(searchField);
  }
})

const loadData = id => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
  .then(res => res.json())
  .then(data => displayData(data.drinks))
}


const displayData = data => {
  // console.log(data);
  const cardContainer = document.getElementById('card-container');
  cardContainer.textContent = '';
  const nothingFound = document.getElementById('nothing-found');
  if(data === null){
    nothingFound.classList.remove('d-none');
    toggleSpinner(false);
    return;
  }
  else{
    nothingFound.classList.add('d-none');
  }
  data.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100" onclick="showDetails(${element.idDrink})" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src="${element.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.strDrink}</h5>
          <p class="card-text">${element.strInstructions.slice(0,180)}</p>
        </div>
    </div>
    `;
    cardContainer.appendChild(div);
  });
  toggleSpinner(false);
};

  // spinner 
  const toggleSpinner = isTrue => {
    const spinner = document.getElementById('spinner');
    if(isTrue === true){
      spinner.classList.remove('d-none');
    }
    else{
      spinner.classList.add('d-none');
    }
  };


  const showDetails = id =>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => displayDetails(data.drinks[0]))
  };

  const displayDetails = data =>{
    console.log(data);
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = data.strDrink;
    const modalBody = document.getElementById('details-modal-body');
    modalBody.innerHTML = `
    <img src="${data.strDrinkThumb}" class="card-img-top" alt="...">
    `;
  };