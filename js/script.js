'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formContact");
    const tbody = document.querySelector("#list tbody");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const author = document.getElementById("txtAuthor").value;
        const title = document.getElementById("txtTitle").value;
        const year = document.getElementById("txtYear").value;
        
        const template = document.getElementById("album-list").content.cloneNode(true);
        
        template.querySelector("[data-field='authors']").textContent = author;
        template.querySelector("[data-field='titles']").textContent = title;
        template.querySelector("[data-field='years']").textContent = year;
        
        tbody.appendChild(template);
        
        form.reset();
    });
});
