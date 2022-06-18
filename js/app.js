let contentHolder = document.getElementById('posts')
let formPost = document.getElementById('post-content')
let header = document.getElementById('title')
let content = document.getElementById('body')
let dataarray = [];

function populatePost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
         console.log(dataarray)
         dataarray = data
         console.log(dataarray)

         let postCard = '';
        dataarray.forEach(post => {
             postCard +=  `<div class="col-lg-10 mb-5">
                                <div class="card rounded-top py-3">
                                    <div class="profile d-flex justify-content-flex-start ms-5">
                                        <img src="image/blackgirl.jpg" class="img-fluid rounded-circle">
                                    </div>
                                    <p class="ms-4">jane young</p>
                                    <p class="ps-3">${post.id}</p>
                                    <h3 class="ps-3 fst-italic">${post.title}</h3>
                                    <p class="ps-3">${post.body}</p>
                                    <div class=" d-inline">
                                        <button class="btn btn-warning btn-lg ms-3 me-2 ms-5" onclick="viewPost(${post.id})">View</button>
                                        <button class="btn btn-secondary btn-lg me-2" onclick="editPost(${post.id})">Edit</button>
                                        <button class="btn btn-primary btn-lg" onclick="deletePost(${post.id})">Delete</button>
                                    </div>
                                    <div class="d-inline ms-5 mt-3">
                                       <div class="d-inline me-5">
                                            <i class="fa-solid fa-heart"></i>
                                            <p class="d-inline-block">2.5k</p>
                                        </div>
                                        <div class="d-inline">
                                            <i class="fa-solid fa-comment"></i>
                                            <p class="d-inline-block">2.5k</p>
                                        </div>
                                    </div>
                                </div>
                            </div>` 
         });
         contentHolder.innerHTML = postCard ; 
       })
      
   }

   populatePost();


  

formPost.addEventListener('submit', makePost)


function makePost(e) {
    e.preventDefault();
    // console.log(title.value, body.value)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: header.value,
            body: content.value,
            userId: 2
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            dataarray.unshift(data);
            console.log(dataarray)
            let postCard = '';
            dataarray.forEach(post => {
                postCard += `
                <div class="col-lg-10 mb-5">
                    <div class="card rounded-top py-3">
                        <div class="profile d-flex justify-content-flex-start ms-5">
                            <img src="image/blackgirl.jpg" class="img-fluid rounded-circle">
                        </div>
                        <p class="ms-4">jane young</p>
                        <p class="ps-3">${post.id}</p>
                        <h3 class="post-title ps-3">${post.title}</h3>
                        <p class="post-body ps-3">${post.body}</p>
                        <div class="d-inline">
                            <button class="btn btn-warning btn-lg me-2 ms-3" onclick="viewPost(${post.id})">view</button>
                            <button class="btn btn-secondary btn-lg me-2" onclick="editPost(${post.id})">Edit</button>
                            <button class="btn btn-primary btn-lg" onclick="deletePost(${post.id})">Delete</button>
                        </div>
                        <div class="d-inline ms-5 mt-3">
                               <div class="d-inline me-3">
                                    <i class="fa-solid fa-heart"></i>
                                    <p class="d-inline-block">2.5k</p>
                                </div>
                                <div class="d-inline">
                                    <i class="fa-solid fa-comment"></i>
                                    <p class="d-inline-block">2.5k</p>
                                </div>
                            </div>
                    </div>
                </div>
            `
            });
            contentHolder.innerHTML = postCard;
        })
}

function viewPost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            localStorage.setItem('postToView', JSON.stringify(data))
            window.location.href = 'blog.html'
        });
}

function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            dataarray = dataarray.filter(post => post.id !== id)
            console.log(dataarray)
            let postCard = '';
            dataarray.forEach(post => {
                postCard += `
                <div class="col-lg-10 mb-5">
                    <div class="card rounded-top py-3">
                        <div class="profile d-flex justify-content-flex-start ms-5">
                            <img src="image/blackgirl.jpg" class="img-fluid rounded-circle">
                        </div>
                        <p class="ms-4">jane young</p>
                        <p class="ps-3">${post.id}</p>
                        <h3 class="post-title ps-3">${post.title}</h3>
                        <p class="post-body ps-3">${post.body}</p>
                        <div class="d-inline">
                            <button class="btn btn-warning btn-lg ms-3 me-2" id="view-btn" onclick="viewPost(${post.id})">view</button>
                            <button class="btn btn-secondary btn-lg me-2" onclick="editPost(${post.id})">Edit</button>
                            <button class="btn btn-primary btn-lg" onclick="deletePost(${post.id})">Delete</button>
                        </div>
                        <div class="d-inline ms-5 mt-3">
                            <div class="d-inline me-3">
                                <i class="fa-solid fa-heart"></i>
                                <p class="d-inline-block">2.5k</p>
                            </div>
                            <div class="d-inline">
                                <i class="fa-solid fa-comment"></i>
                                <p class="d-inline-block">2.5k</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
            });
            contentHolder.innerHTML = postCard;
              
        })

}




 
 





