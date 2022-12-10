const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });


const blogSection = document.querySelector('.hero-image');

const singleBlogFuntion = () => {
    fetch(`https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1//news/${params.id}`).then((data) => {
    return data.json()
    }).then((blog) => {
        
        createSingleBlog(blog)
    })

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

// const createSingleBlog = (blog) => {
//     let data = blog;
//     blogSection.innerHTML += `
//     <div class="left">

//           <h1 class="h1 hero-title">
//             ${data.title}
//           </h1>

//           <p class="h3 mb-2 hero-url">
//             ${data.url}
//           </p>

//           <div class="btn-group">
//             <a href="#" class="hero-author btn btn-primary">By: ${data.author}</a>
//           </div>

//     </div>
//     `;
// }