 //your JS code here
document.getElementById("btn").addEventListener("click", () => {
    let first = document.getElementById("First Name").value;
    let second = document.getElementById("Last Name").value;
    let third = document.getElementById("Phone Number").value;
    let fourt = document.getElementById("Email ID").value;

    let a = `First Name: ${first} Last Name: ${second} Phone Number: ${third} Email ID: ${fourt}`;
    alert(a);
});
