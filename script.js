document.addEventListener("DOMContentLoaded", function () {

    // Sticky header
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 50);
    });

    // Hero enroll button
    document.querySelector(".hero button").addEventListener("click", function () {
        alert("Enrollment form coming soon!");
    });

    // Contact button
    document.querySelector(".contact button").addEventListener("click", function () {
        alert("Contact form coming soon!");
    });

    // Smooth nav links (temporary placeholder)
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Section coming soon!");
        });
    });

});

