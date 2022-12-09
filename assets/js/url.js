const topicsSection = document.querySelector('.topic-container');




    fetch("https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news").then((data) => {
    return data.json()
    }).then((blogs) => {
        // element.remove();
        if(topicsSection.hasChildNodes()){
            while (topicsSection.hasChildNodes()) {
                topicsSection.removeChild(topicsSection.firstChild)
            }
        }
        blogs.slice(0,10).forEach(topic => {
            
            if(topic.id != decodeURI(location.pathname.split("/").pop())){
                createTitle(topic);
            }
        })
    })



const createTitle = (topic) => {
    let data = topic;
    topicsSection.innerHTML += `
    <a href="#" class="topic-btn">
        <div class="icon-box">
        <ion-icon name="server-outline"></ion-icon>
        </div>  

        <p>${data.url}</p>
    </a>
    `;
}