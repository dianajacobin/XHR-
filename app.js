const form = document.getElementById('search-form'); // contiene el formulario
const searchField = document.getElementById('search-keyword'); //input
const responseContainer = document.getElementById('response-container'); //boton
let searchedForText;


form.addEventListener('submit', e =>{
 e.preventDefault();
 responseContainer.innerHTML=' ';
 searchdForText= searchField.value;
 getNews();
}); 
//crearemos las peticiones
 getNews = () => {
    const articleRequest=new XMLHttpRequest();                                                                                                                                                                                            
    articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=e378570e4e244d5ba1f45360780886df`);
    articleRequest.onload = addNews;
    articleRequest.onerror=handleError;
    articleRequest.send();
}

 handleError = () =>  console.log ('Se ha presentado un error');

 addNews = () =>{
     const data=JSON.parse(this.responseText);
     console.log(data);
    // const response = data.response;
    // console.log(response);
 }


