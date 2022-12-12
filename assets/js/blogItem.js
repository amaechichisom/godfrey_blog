const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });


const blogSection = document.querySelector('.hero-image');

const singleBlogFuntion = () => {
    fetch(`https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/${params.id}`).then((data) => {
    return data.json()
    }).then((blog) => {
        
        createSingleBlog(blog)
    }).catch(err =>{alert(err)})

}

setTimeout(singleBlogFuntion(),1000)


const createSingleBlog = (blog) =>{
    let data = blog;
    const heroImage = document.querySelector('.hero-image');
    const heroTitle = document.querySelectorAll('.hero-title');
    const heroUrl = document.querySelector('.hero-url');
    const heroAuthor = document.querySelector('.hero-author');


    heroImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data.avatar})`;

    heroTitle.forEach(title =>{
        title.innerHTML = data.title
    })
    heroUrl.innerHTML = data.url;
    heroAuthor.innerHTML = data.author;
}


const deletePost = document.querySelector('#delete_post');

deletePost.addEventListener('click', ()=>{
    fetch(`https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/${params.id}`, {
        method: 'delete',
    }).then((data) => {
        alert("Post deleted")
        console.log(data.json)
        window.location.replace("/");
        }).catch(err =>{alert(err)})
    })
