// Add your code here
function submitData (userName, userEmail) {
    const formData = {
        name: userName,
        email: userEmail,
    }
    const destinationURL = " http://localhost:3000/users"
    const configurationObject = {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }
    fetch(destinationURL, configurationObject)
    .then(response => response.json())
    .then(object => console.log(object))
}