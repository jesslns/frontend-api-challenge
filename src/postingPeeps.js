// Information to reach API
const url = 'https://chitter-backend-api.herokuapp.com/'
const pathway = 'peeps'

// AJAX function
const getPeeps = () => {
  const endpoint = `${url}${pathway}`

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };
  xhr.open('GET', endpoint);
  xhr.send();
};

// Clear previous results and display results to webpage
const displayPeeps = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getPeeps();
}

$(window).on("load", displayPeeps);

// submit.addEventListener('click', displayPeeps);
