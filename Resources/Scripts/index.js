function getPosts(){ //GET METHOD
  const allPostApiUrl = "https://localhost:5001/api/posts/";

  fetch(allPostApiUrl)
  .then(function (respone) {
    console.log(respone);
    return respone.json();
  })
  .then(function (json) {
    let html = "<ul>";
    json.forEach((post) => {
      html += "<li>" + post.postText + "</li>";});
      html += "</ul>";
    document.getElementById("posts").innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });
}

function postPost(){ //POST METHOD
  const newText = document.getElementById("editText").value;
  const postApiUrl = "https://localhost:5001/api/posts/";

  fetch(postApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({postText: newText})
  })
  .then((respone) => {
    console.log(respone);
    getPosts();
  })
}

function editPost(){ //PUT METHOD
  const postEditID = document.getElementById("editID").value;
  const postEditText = document.getElementById("editText").value;
  const editApiUrl = "https://localhost:5001/api/posts/" + postEditID;

  fetch(editApiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postEditText),
  }).then((respone) => {
    console.log(respone);
    getPosts();
  });
}

function removePost(){ //DETELE METHOD
  const ppostID = document.getElementById("deletePost").value;
  const deleteApiUrl = "https://localhost:5001/api/posts/" + ppostID;
  
  fetch(deleteApiUrl, {
    method: "DELETE",
    headers: {
            "Content-Type": 'application/json'
        }
  }).then((respone)=>{
    console.log(respone);
    getPosts();
  })
}

function reseedDatabase(){
  const temp = 1;
  const editText = "reseed";
  const editApiUrl = "https://localhost:5001/api/posts/" + temp;

  fetch(editApiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editText),
  }).then((respone) => {
    console.log(respone);
    getPosts();
  });
}