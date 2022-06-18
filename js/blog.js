function rendersingle() {
    let newObject = localStorage.getItem('postToView')
    console.log(newObject);
    let post = JSON.parse(newObject)
    console.log(post)
    document.getElementById('post-id').innerHTML = post.id
    document.getElementById('post-title').innerHTML = post.title
    document.getElementById('post-body').innerHTML = post.body
}

rendersingle();

