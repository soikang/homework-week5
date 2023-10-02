$(document).ready(function () {
    // Add a click event handler to all table cells in the tbody
    $('td').click(function (){
         // Check if the cell contains the text "Not Available"
        if (($(this).text().trim() !== "Not Available") && !$(this).is('#unselectable')) {
        // Toggle the 'highlighted' class on the clicked cell
        $(this).toggleClass('highlighted');
        }
    });
});