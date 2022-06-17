let contentHolder = document.getElementById('posts')
let form = document.getElementById("post-content")
let header = document.getElementById("title")
let content = document.getElementById("body")
let dataarray = []

function populatePost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
         console.log(dataarray)
         dataarray = data

         let postCard = '';
        dataarray.forEach(post => {
             postCard +=  `<div class="col-lg-10 mb-5">
                                <div class="card rounded-top py-3">
                                    <div class="profile d-flex justify-content-flex-start ms-5"><img src="../image/dogbg.jpg" class="img-fluid rounded-circle"></div>
                                    <p class="ms-4">jane young</p>
                                    <p class="ps-3">${post.id}</p>
                                    <h3 class="ps-3">${post.title}</h3>
                                    <p class="ps-3">${post.body}</p>
                                    <div class="text-center mt-2 d-flex">
                                        <div><button class="btn btn-warning me-2 px-3 ms-5" onclick="editPost"${post.id}>Edit</button></div>
                                        <div><button class="btn btn-secondary me-2 px-3" onclick="viewPost"${post.id}>View</button></div>
                                        <div><button class="btn btn-primary me-2 px-3" onclick="deletePost"${post.id}>Delete</button></div>
                                    </div>
                                </div>
                            </div>` 
         });
         contentHolder.innerHTML = postCard ; 
       })
      
   }

   populatePost();


   form.addEventListener('submit', makepost)

   function makepost(e){
      e.preventdefault();
       fetch('https://jsonplaceholder.typicode.com/posts', {
           method:"POST",
           body:JSON.stringify({
            title:header.value,
            body:content.value,
            userid:10,
           }),
           headers:{'content-type':'application/json'}
       })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        dataarray = unshift(data);
        console.log(dataarray)
        let postCard = '';
        dataarray.forEach(post => {
             postCard +=  `<div class="col-lg-10 mb-5">
                                <div class="card rounded-top py-3">
                                    <div class="h-50 w-50"><img src="../image/dogbg.jpg" class="img-fluid rounded-circle"></div>
                                    <p>jane young</p>
                                    <p class="ps-3">${post.id}</p>
                                    <h3 class="ps-3">${post.title}</h3>
                                    <p class="ps-3">${post.body}</p>
                                    <div class="text-center mt-2 d-flex justify-content-between">
                                        <div><button class="btn btn-warning me-2 px-3 ms-5" onclick="editPost"${post.id}>Edit</button></div>
                                        <div><button class="btn btn-secondary me-2 px-3" onclick="viewPost"${post.id}>View</button></div>
                                        <div><button class="btn btn-primary me-2 px-3" onclick="deletePost"${post.id}>Delete</button></div>
                                    </div>
                                </div>
                            </div>` 
        });
        contentHolder.innerHTML = postCard
    })
}


    function viewPost(id){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) =>{
            localStorage.setItem("postToView", JSON.stringify(data))
            window.location.href = 'blog.html'
        });
    }

    function deletePost(id){
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method:"DELETE",
        })
        .then((response) => response.json())
        .then((data) => {
            dataarray = dataarray.filter(post => post.id !==id)
            console.log(dataarray)
            let postCard = '';
            dataarray.forEach(post => {
                 postCard +=  `<div class="col-lg-10 mb-5">
                                    <div class="card rounded-top py-3">
                                        <div class="h-50 w-50"><img src="../image/dogbg.jpg" class="img-fluid rounded-circle"></div>
                                        <p>jane young</p>
                                        <p class="ps-3">${post.id}
                                        <h3 class="ps-3">${post.title}</h3>
                                        <p class="ps-3">${post.body}</p>
                                        <div class="text-center mt-2 d-flex">
                                            <div><button class="btn btn-warning me-2 px-3 ms-5" onclick="editPost"${post.id}>Edit</button></div>
                                            <div><button class="btn btn-secondary me-2 px-3" onclick="viewPost"${post.id}>View</button></div>
                                            <div><button class="btn btn-primary me-2 px-3" onclick="deletePost"${post.id}>Delete</button></div>
                                        </div>
                                    </div>
                                </div>`
        })
        contentHolder.innerHTML = postCard
    })
}



 
 





