function download_img() {
    var input = document.getElementById("urlInput");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            var URLinput = document.getElementById('urlInput');
            console.log(URLinput.value);
            sendURL(URLinput.value);
        }
    });

}


function sendURL(URL) {
    try {
        window.location.href = `http://localhost:3000/download?URL=${URL}`;
    } catch (error) { alert(error); }

}