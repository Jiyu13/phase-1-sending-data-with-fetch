// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name, 
          email
        })
      })
      .then(response => response.json())
      .then(object => {
        const newTag = document.createElement("p");
        const text = document.createTextNode(object.id);
        newTag.appendChild(text);
        document.body.appendChild(tag);
      })
      .catch(function(error) {
        const newTag = document.createElement("p");
        const text = document.createTextNode(error.message);
        newTag.appendChild(text);
        document.body.appendChild(newTag);
    })
}
