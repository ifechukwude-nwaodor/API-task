function editPost(){
    let newobject = localStorage.getItem('postToView')
    let post = JSON.parse(newobject)
    document.getElementById("post-id").innerHTML = post.id
    document.getElementById("post-title").innerHTML = post.title
    document.getElementById("post-body").innerHTML = post.body
}
editPost();

