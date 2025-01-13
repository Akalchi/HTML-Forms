const form = document.getElementById("form_container");
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;
        const comments = document.getElementById("text").value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Age:", age);
        console.log("Comments:", comments);
    });

