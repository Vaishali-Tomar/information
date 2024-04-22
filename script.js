const content = document.getElementsByClassName('content');
const input = document.getElementById('input-text');
let data1 = [];
let main_data = document.getElementsByClassName('main'); 

input.addEventListener('change', getdata);

async function getdata() {
   // try {
        let response = await fetch('https://randomuser.me/api?results=50');
        let data = await response.json();
        console.log(data);
        // if (data.error) {
        //     console.error("Error fetching data:", data.error);
        //     return;
        // }
        data1 = data.results;
        data1.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML += `<img src="${element.picture.medium}" alt="Profile Picture">
                             <h2>${element.name.first} ${element.name.last}</h2> 
                             <p>${element.location.state} ${element.location.country}</p>
                             <hr>`;
            main_data[0].append(li);
        });
        //console.log(data1);
   // } catch (error) {
       // console.error("Error fetching data:", error);
   // }
}

getdata();
