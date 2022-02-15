if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("Service worker Registered")
        console.log(registration)
    }).catch( error => {
        console.log("Service worker Fail!!!!!!!!!!!!!!!!!!")
    })

}

var clickMe = document.querySelector('.link-to-fav-profi');
document.addEventListener('click', function (event) {
	if (!event.target.closest('.link-to-fav-profi')) return;
    console.log("working click to link")
});
