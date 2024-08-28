
var postTitle = document.getElementById('post-title');
var postDiscription = document.getElementById('post-discription');
var postCard = document.getElementById('post-card');

function addPosts() {
    var postTitle = document.getElementById('post-title');
    var postDiscription = document.getElementById('post-discription');

    var posts = document.getElementById('posts');

    if (postTitle.value.trim() && postDiscription.value.trim()) {

        posts.innerHTML += `<div class="card  mt-3" id="post-card">
    <div class="card-header fontStyle">
@Posts
</div>
<div class="card-body ">
<h5 class="card-title fontStyle">${postTitle.value}</h5>
<p class="card-text fontStyle">${postDiscription.value}</p>
</div>
<div class="p-3">
<button type="button" onclick="edit(event)" class="btn btn-secondary mt-4 fontStyle ">Edit</button>
<button type="button" onclick="remove(event)" class="btn btn-danger mt-4 fontStyle ">Delete</button>
</div>
</div>`

    posts.className += ' border-green';

    postTitle.value = "";
    postDiscription.value = "";

    }

    else{
        Swal.fire({
            title: "Write something?",
            text: "Please enter something",
            icon: "question"
          });
    }

  

}

function remove(event) {
    event.target.parentNode.parentNode.remove();

    posts.className -= ' border-green';
}

async function edit(event) {

    var card = event.target.closest('.card');
    var titleElement = card.querySelector('.card-title');
    var descriptionElement = card.querySelector('.card-text');

    const { value: formValues } = await Swal.fire({
        title: "Update Post",
        html: `
         <label class="m-2 p-2">Update Title</label> 
         <input id="swal-input1" class="swal1-input" value="${titleElement.textContent}">
         <label class="m-2 p-2">Update Discription</label> 
         <input id="swal-input2" class="swal1-input" value="${descriptionElement.textContent}">
        `,
        focusConfirm: false,
        preConfirm: () => {
            var editTitle = document.getElementById('swal-input1');
            var editDiscription = document.getElementById('swal-input2');
            return [
                title = document.getElementById("swal-input1").value,
                description = document.getElementById("swal-input2").value
            ];
        }
    });

    titleElement.textContent = formValues[0];
    descriptionElement.textContent = formValues[1];

    postTitle.innerHTML = titleElement.innerHTML;
    postDiscription.innerHTML = descriptionElement.innerHTML;


}

function addBg1() {
    var postCard = document.getElementById('post-card');
    postCard.className += " add-bg-1"
}


function addBg2() {
    var postCard = document.getElementById('post-card');
    postCard.className += " add-bg-2"
}


function addBg3() {
    var postCard = document.getElementById('post-card');
    postCard.className += " add-bg-3"
}


function addBg4() {
    var postCard = document.getElementById('post-card');
    postCard.className += " add-bg-4"
}


function addBg5() {
    var postCard = document.getElementById('post-card');
    postCard.className += " add-bg-5"
}

