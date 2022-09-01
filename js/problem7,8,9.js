const loadPhotos = (showAllCheck) => {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => res.json())
  .then(data => displayPhotos(data, showAllCheck))
}
loadPhotos();

const displayPhotos = (data, showAllCheck = true) => {
  const showAllBtn = document.getElementById('show-all-btn');
  if(showAllCheck && data.length > 100 ){
    data = data.slice(0, 100);
    showAllBtn.classList.remove('d-none');
  }
  else{
    showAllBtn.classList.add('d-none');
  }
  const photosContainer = document.getElementById('photos-container');
  photosContainer.textContent = '';
  data.forEach(element => {
    // console.log(element);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
    <img src="${element.url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <button class="btn btn-primary" onclick="loadDetails(${element.id})" data-bs-toggle="modal" data-bs-target="#photsModal" >Details</button>
    </div>
    </div>
    `;
    photosContainer.appendChild(div);
  });
}

const loadDetails = id => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayModal(data))
};

const displayModal = data => {
  const modalTitle = document.getElementById('photoModalLabel');
  modalTitle.innerText = data.title;
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
  <img src=${data.url} class="img-fluid">
  `;
};

// show all 
const showAll = () => {
  loadPhotos(false);
};

