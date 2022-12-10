const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });


const commentSection = document.querySelector('.comment-container');

const comment_funtion = () => {
    fetch(`https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/${params.id}/comments`).then((data) => {
    return data.json()
    }).then((comments) => {
        console.log(comments)
        if(commentSection.hasChildNodes()){
            while (commentSection.hasChildNodes()) {
                commentSection.removeChild(commentSection.firstChild)
            }
        }
        comments.forEach(comment => {
            
            if(comment.id != decodeURI(location.pathname.split("/").pop())){
                createComment(comment);
            }
        })
    })

}

setTimeout(comment_funtion(),1000)

const createComment = (comment) =>{
    let data = comment;

    commentSection.innerHTML += `
    <a href="#" class="comment-btn">
        <div class="icon-box mr-2">
        <img src=${data.avatar} />
        </div>  

        <p>${data.comment}</p>
    </a>
    `;
}