document.addEventListener("DOMContentLoaded", function() {
    let deleteLinks = document.querySelectorAll(".delete");
    
    deleteLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            if (!confirm("¿Estás seguro de que deseas eliminar este producto?")) {
                event.preventDefault();
            }
        });
    });
});