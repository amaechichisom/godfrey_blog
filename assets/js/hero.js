// const slideShow = import("./slide")

const blogSection = document.querySelector('.hero');

fetch("https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news").then((data) => {
    return data.json()
}).then((blogs) => {
    
    blogs.slice(0,10).forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
}).then(()=>{
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "grid";  
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }


})

const createBlog = (blog) => {
    let data = blog;
    blogSection.innerHTML += `
    <div class="hero-container relative mySlides fade">
        <div class="left">

          <h1 class="h1">
            ${data.title}
          </h1>

          <p class="h3">
            ${data.url}
          </p>

          <div class="btn-group">
            <a href="#" class="btn btn-primary">By: ${data.author}</a>
          </div>

        </div>

        <div class="right">

          <div class="pattern-bg"></div>
          <div class="img-box">
            <img src=${data.avatar} alt="Julia Walker" class="hero-img">
          </div>

        </div>
    </div>
    `;
}

