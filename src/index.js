if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("Service worker Registered")
        console.log(registration)
    }).catch( error => {
        console.log("Service worker Fail!!!!!!!!!!!!!!!!!!")
    })

}