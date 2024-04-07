$(document).ready(function() {
    $('#radioForm').submit(function(event) {

        // Get the selected radio button value
        var status = $('input[name="status"]:checked').val();
        var studentNumber = $('input[name="studentNumber"]').val();
        var fullName = $('input[name="fullName"]').val();
        var address =$('input[name="address"]').val();

        // Send the selected value to the server
        $.ajax({
            type: 'POST',
            url: 'https://registrationwebsitebackend-2.onrender.com/register',
            
            data: { 
                studentNumber: studentNumber,
                fullName: fullName,
                address: address,
                status: status },
            success: function(response) {
                console.log('Data saved successfully:', response);
            },
            error: function(error) {
                console.log('Error saving data:', error);
            }
        });
    });

});
