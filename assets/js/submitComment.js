const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

const form = document.querySelector("#make-comment");



form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();
    const formData = new FormData();

    formData.append("name", form.elements["name"].value)
    formData.append("title", form.elements["title"].value)
    formData.append("image", form.elements["image"].value)

    fetch(`https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news/${params.id}/comments`, {
        method: 'post',
        body: formData,
    }).then((data) => {
        console.log(data)
        alert(alert(formData.get("name") + " just commented: " +formData.get("title")))
        location.reload();
    })
    
});

