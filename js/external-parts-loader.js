document.addEventListener("DOMContentLoaded", function() {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation:', error));

    fetch("footer.html")
        .then(response2 => response2.text())
        .then(data2 => {
            document.getElementById("footer-placeholder").innerHTML = data2;
        })
        .catch(error2 => console.error('Error loading footer:', error2));
});
