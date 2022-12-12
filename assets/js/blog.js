const blogSection = document.querySelector('.blog-card-group');

const prevButton = document.querySelector('#prev_button');

const nextButton = document.querySelector('#next_button');


let index_page = 0;
let blogs_length = 0;

const blog_funtion = () => {
    fetch("https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news").then((data) => {
    return data.json()
    }).then((blogs) => {
        blogs_length = blogs.length
        // element.remove();
        if(blogSection.hasChildNodes()){
            while (blogSection.hasChildNodes()) {
                blogSection.removeChild(blogSection.firstChild)
            }
        }
        blogs.slice(index_page,10+index_page).forEach(blog => {
            
            if(blog.id != decodeURI(location.pathname.split("/").pop())){
                createBlog(blog);
            }
        })
    })

}

setTimeout(blog_funtion(),1000)

prevButton.addEventListener("click", () =>{
    
    if(index_page === 0){
        return
    }
    else{
        index_page -= 10
        blog_funtion()
    }
})

nextButton.addEventListener("click", () =>{
    
    if(index_page+10 < blogs_length){
        index_page += 10
        blog_funtion()
    }
    else{
        return
    }
})



const createBlog = (blog) => {
    let data = blog;
    blogSection.innerHTML += `
    <div class="blog-card" id="blog-card">

              <a href="./blog.html?id=${data.id}" class="blog-card-banner">
                <img src=${data.avatar} alt=${data.author}
                  width="150" class="blog-banner-img">
              </a>

              <div class="blog-content-wrapper">

                <a href="./blog.html?id=${data.id}" class="blog-topic text-tiny">${data.id}</a>

                <h3>
                  <a href="./blog.html?id=${data.id}" class="h3">
                    ${data.title}
                  </a>
                </h3>

                

                <div class="wrapper-flex">

                  <a href="./blog.html?id=${data.id}" class="profile-wrapper">
                    <img src=${data.avatar} alt=${data.author} width="50">
                  </a>

                  <div class="wrapper">
                    <a href="./blog.html?id=${data.id}" class="h4">${data.author}</a>

                    <p class="text-sm">
                      <a class="footer-link" href="./blog.html?id=${data.id}">Read here</a>
                      <span class="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT3M">1 min</time>
                    </p>
                  </div>

                </div>

              </div>

            </div>
    `;
}