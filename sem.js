document.getElementById('registrationForm').addEventListener('submit', function (event) {
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        console.log("Form submitted!");
        event.preventDefault();
        // Rest of your code...
    });
    event.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;

    // Validate form fields
    if (!firstName || !lastName || !email || !phone || !address || !dob) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission (you can replace this with an AJAX call to your backend)
    console.log('Form Data:', {
        firstName,
        lastName,
        email,
        phone,
        address,
        dob
    });

    console.log("Script loaded!");

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Clear the form
    document.getElementById('registrationForm').reset();
});