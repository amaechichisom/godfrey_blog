const authorSection = document.querySelector('.author_wrapper');




    fetch("https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news").then((data) => {
    return data.json()
    }).then((authors) => {
        // element.remove();
        if(authorSection.hasChildNodes()){
            while (authorSection.hasChildNodes()) {
                authorSection.removeChild(authorSection.firstChild)
            }
        }
        authors.slice(0,20).forEach(author => {
            
            if(author.id != decodeURI(location.pathname.split("/").pop())){
                createAuthor(author);
            }
        })
    })



const createAuthor = (author) => {
    let data = author;
    authorSection.innerHTML += `
    <button class="hashtag">${data.author}</button>
    `;
}