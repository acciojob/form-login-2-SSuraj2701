 //your JS code here
document.getElementById("btn").addEventListener("click", () => {
    let first = document.getElementById("firstname").value;
    let second = document.getElementById("lastname").value;
    let third = document.getElementById("phone").value;
    let fourt = document.getElementById("email").value;

    let a = `First Name: ${first} Last Name: ${second} Phone Number: ${third} Email ID: ${fourt}`;
    alert(a);
});
