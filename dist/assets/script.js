console.log("Connected to Index!");

$('.email').click(function (event) {
        
    document.location = `mailto:${event.target.innerHTML}`;
});