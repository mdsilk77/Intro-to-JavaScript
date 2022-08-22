//Delay JavaScript execution until al HTML and CSS is rendered
document.addEventListener("DOMContentLoaded", function(event){

    //Event listener for clicking on hamburger menu
    document.getElementById('burger').addEventListener('click', function() {
        var menu = document.getElementById('nav');
        menu.className = menu.className == 'iconsonly' ? 'fullmenu' : 'iconsonly';
    })

    //Start with menu showing icons only
    document.getElementById('nav').className = "iconsonly";

    //This runs every time the page loads, doesn't need to be called as a function
    var filename = location.pathname.split('/').pop();
    //If it's nothing, or index.html, or index.htm, it's the home page.
    if (filename == '' || filename == 'index.html' || filename == 'index.htm') {
        document.getElementById('home').className = "currentpage";
    } else {
        //Otherwise loop through the rest of the links and apply highlight CSS style to 
        //the link whose id matches the current page filename (without the extension)
        var nav = document.getElementById('nav');
        var links = nav.getElementsByTagName('a');
        for (i = 1; i < links.length; i++) {
            if (links[i].getAttribute('href').indexOf(filename) > -1) {
                links[i].className = "currentpage";
            }
        }
    }

    //Make sure all JavaScript code is within this block.
})  //End of documnent.addEventListener block