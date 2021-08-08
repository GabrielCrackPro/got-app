const charactersContainer = document.querySelector(".characters-container");
const API_URLS = {
  base: "https://thronesapi.com/api/v2/",
  characters: "https://thronesapi.com/api/v2/Characters",
  continents: "https://thronesapi.com/api/v2/Continents",
};
const getData = async (url) => {
  let data = await fetch(url).then((response) => response.json());
  return data;
};

window.onload = async () => {
  let characters = await getData(API_URLS.characters);
  characters.forEach((character) => {
    charactersContainer.innerHTML += `
      <div class="card mb-3 mt-3">
  <div class="row g-0">
    <div class="col-md-4">
    <a href="${character.imageUrl}" target="blank"><img src="${
      character.imageUrl
    }" class="img-fluid rounded-start" alt="character-img"></a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title got-border">#${character.id + 1} ${
      character.fullName
    }</h5>
        <p class="card-text">Title: ${character.title}</p>
        <p class="card-text">Family: ${character.family}</p>
        <p class="card-text">ID: ${character.id}</p>
        <a href="${API_URLS.characters}/${
      character.id
    }" target="blank" class="btn btn-sm got-bg">View JSON</a>
      </div>
    </div>
  </div>
</div>
      `;
  });
};
