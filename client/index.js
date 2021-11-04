// fetch('./users.json')
// .then(resp=>resp.json())
// .then(console.log)
const button=document.getElementById('button');
button.addEventListener('click',()=>{
    async function getInfo(){
        fetch('/../users.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log(err);
        });
    
    const mainContainer = document.getElementById("myData");
    function appendData(data) {
        var mainContainer = document.getElementById("myData");
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");
            let other = document.createElement("div");
    
            div.innerHTML = 'User id: ' + data[i].id
            other.innerHTML += "<br />"+ 'Name: ' + data[i].first_name + '\n'
            other.innerHTML += "<br />" + 'Lastname: ' + data[i].last_name + '\n'
            other.innerHTML += "<br />" + 'email: ' + data[i].email + '\n'
            let img = document.createElement('img');    // Create an <img> element.
            img.src = data[i].photo;  
            
            mainContainer.appendChild(div);
            mainContainer.appendChild(other);
    
            div.setAttribute('style', 'font-weight: bold; font-size: 24px');
    
            mainContainer.appendChild(img);
        }
    }   
    }
    getInfo()
})