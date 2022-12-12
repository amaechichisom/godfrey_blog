const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

const form = document.querySelector("#make-comment");



form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

    let id = Math.floor(Math.random() * 1000);

    const formData = new FormData();

    formData.append("name", form.elements["name"].value)
    formData.append("comment", form.elements["title"].value)
    formData.append("avatar", form.elements["image"].value)
    formData.append("newsId", params.id.toString())

    fetch(`https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/${params.id}/comments`, {
        method: 'post',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then((data) => {
        console.log(data)
        alert(formData.get("name") + " just commented: " +formData.get("comment"))
        location.reload();
    })
    
});

