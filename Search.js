     function myFunction() {
     alert("You are leaving this website");
    }
        
     function confirmLeave() {
        // Display a confirmation dialog
        var result = window.confirm("Are you sure you want to leave this website?");
        
        // Check the user's choice
        if (result) {
            // If the user clicks "OK", leave the website
            window.location.href = "https://www.successrealtyutah.com/fine/real/estate/newsearch"; // Replace with the desired URL
        } else {
            // If the user clicks "Cancel", do nothing
            return false;
        }
    }