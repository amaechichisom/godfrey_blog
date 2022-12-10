const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

const form = document.querySelector("#make-post");



form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

    // generating id
    let id = Math.floor(Math.random() * 1000);

    const formData = new FormData();

    formData.append("name", form.elements["name"].value)
    formData.append("title", form.elements["title"].value)
    formData.append("url", form.elements["url"].value)
    formData.append("image", form.elements["image"].value)

    fetch(`https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news`, {
        method: 'post',
        body: formData,
    }).then((data) => {
        console.log(data)
        alert(formData.get("name") + " just wrote the following post: " +formData.get("title"))
        location.reload();
    })
    
});

