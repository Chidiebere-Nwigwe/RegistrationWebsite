const registrationInfo = document.getElementById('registrationInfo');
// Parse URL parameters
const urlParams = new URLSearchParams(window.location.search);
const studentNumber = urlParams.get('studentNumber');
const fullName = urlParams.get('fullName');
const address = urlParams.get('address');
const status = urlParams.get('status');

// Display registration info on the page

registrationInfo.innerHTML = `
    <p><strong>Student Number:</strong> ${studentNumber}</p>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Status:</strong> ${status}</p>
`;

if(status == "Volunteer"){
    registrationInfo.innerHTML += 
    `<p><strong>Fee:</strong> $0</p>`
}
if(status == "Staff"){
    registrationInfo.innerHTML += 
    `<p><strong>Fee:</strong> $50</p>`
}
if(status == "Student"){
    registrationInfo.innerHTML += 
    `<p><strong>Fee:</strong> $10</p>`
}