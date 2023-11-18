
// ? Form submission section
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Show the loading template
    document.getElementById('loadingTemplate').style.display = 'block';
    
    // Submit the form data asynchronously
    var form = document.getElementById('myForm');
    var formData = new FormData(form);
    
    fetch('https://script.google.com/macros/s/AKfycbwrHVnxt9fstYU1s7tsLfmIuTtSyU7Hv0JlhSsWv__CvVUaqxN59agbW2jhXZ1C8tWq2w/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Hide the loading template
        document.getElementById('loadingTemplate').style.display = 'none';
        
        // Show the submission message
        document.getElementById('submissionMessage').style.display = 'block';
        
        // You can perform additional actions based on the submission response if needed
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        
        // Handle the error if needed
    });
});



function reloadPage() {
    window.location.reload();
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Submit the form data asynchronously
    var form = document.getElementById('myForm');
    var formData = new FormData(form);
    
    // Replace the following URL with your form submission URL
    fetch('https://script.google.com/macros/s/AKfycbw1Uxs4waXgYBXTwATesz00fr1Ycg_-Emk9sgxk96scGEiZUO3TSJR4f9p1rXN0OUbI8w/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the form submission response if needed
        
        // Reload the page after a short delay (e.g., 500 milliseconds)
        setTimeout(reloadPage, 500);
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    });
});

//   function reloadPage() {
    //     window.location.reload();
    //   }
    //     document.getElementById('myForm').addEventListener('submit', function () {
        //     reloadPage();
        //   });