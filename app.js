const form = document.getElementById('search-form'); // contiene el formulario
const searchField = document.getElementById('search-keyword'); //input
const responseContainer = document.getElementById('response-container'); //boton
let searchedForText;


form.addEventListener('submit',  (e) => {
 e.preventDefault();
 responseContainer.innerHTML=' ';
 searchedForText= searchField.value;
 getNews();
}); 
//crearemos las peticiones
 getNews = () => {
    const articleRequest=new XMLHttpRequest();                                                                                                                                                                                            
    articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=06a969bb2a8947fc85ec2500771f4f8d`);
    articleRequest.onload = addNews;
    articleRequest.onerror=handleError;
    articleRequest.send();
}

 handleError = () => console.log ('Se ha presentado un error');

 addNews = () => {
     const data=JSON.parse(this.responseText);
     const article = data.response.docs [0];
     const title = article.headline.main;
     const snippet = article.snippet;
 
     let li = document.createElement('li');
     li.className = 'article.class';
     li.innerText = snippet;
     responseContainer.appendChild(li);
}
