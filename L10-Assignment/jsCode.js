document.addEventListener("DOMContentLoaded", function (event) {
    //Event listener for clicking on Go button menu.
    document.getElementById('btnGo').addEventListener('click', function () {
        var startingNum = parseInt(document.getElementById("tbStart").value);
        var endingNum = parseInt(document.getElementById("tbEnd").value);
        // For blank box use the number zero.
        startingNum = isNaN(startingNum) ? 0 : startingNum;
        endingNum = isNaN(endingNum) ? 0 : endingNum;
        var step = 1;
        //In case we have to count backwards
        if (endingNum < startingNum) {
            step = -1;
        }
        //Clear out any previous results
        document.getElementById("results").innerHTML = "";
        // Now do the loop.
        for (i = startingNum; i != endingNum + step; i += step) {
            document.getElementById("results").innerHTML += i + "<br>"
        }
        //Scroll to the bottom of the page
        window.scrollTo(0, document.body.scrollHeight);
    }) // End of document.addEventListener block
}) //End of DOMcontentLoaded