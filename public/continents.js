const continentsContainer = document.querySelector(".continents-container");
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
  let continents = await getData(API_URLS.continents);
  continents.forEach((continent) => {
    continentsContainer.innerHTML += `
      <div class="card mb-3 mt-3">
  <div class="row g-0">
    <div>
      <div class="card-body">
        <h5 class="card-title got-border">#${continent.id + 1} ${
      continent.name
    }</h5>
        <p class="card-text">ID: ${continent.id}</p>
        <a href="${API_URLS.continents}/${
      continent.id
    }" target="blank" class="btn btn-sm got-bg">View JSON</a>
      </div>
    </div>
  </div>
</div>
      `;
  });
};
