// Add your code here
function submitData (userName, userEmail) {
    const formData = {
        name: userName,
        email: userEmail,
    }
    const destinationURL = " http://localhost:3000/users"
    const configurationObject = {
        header: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }
    fetch(destinationURL, configurationObject)
}