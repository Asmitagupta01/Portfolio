//linkedinbtn
document.getElementById('viewLinkedInBtn').addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/asmita-gupta-263809224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
});

// resume download
document.getElementById('downloadBtn').addEventListener('click', function () {
    var a = document.createElement('a');

    a.href = 'CV_2024040421334082.pdf';
    a.download = 'CV_2024040421334082.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// contact me form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const responseElement = document.getElementById('response');
    responseElement.textContent = 'Form submitted successfully!';
    responseElement.style.color = 'lavender';
});


