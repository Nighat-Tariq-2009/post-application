
// var postTitle = document.getElementById('post-title');
// var postDiscription = document.getElementById('post-discription');
// var postCard = document.getElementById('post-card');


// function addPosts() {
//     var postTitle = document.getElementById('post-title');
//     var postDiscription = document.getElementById('post-discription');

//     var posts = document.getElementById('posts');

//     if (postTitle.value.trim() && postDiscription.value.trim()) {

//         posts.innerHTML += `<div class="card  mt-3" id="post-card">
//     <div class="card-header fontStyle">
// @Posts
// </div>
// <div class="card-body ">
// <h5 class="card-title fontStyle">${postTitle.value}</h5>
// <p class="card-text fontStyle">${postDiscription.value}</p>
// </div>
// <div class="p-3">
// <button type="button" onclick="edit(event)" class="btn btn-secondary mt-4 fontStyle ">Edit</button>
// <button type="button" onclick="remove(event)" class="btn btn-danger mt-4 fontStyle ">Delete</button>
// </div>
// </div>`

//     posts.className += ' border-green';

//     postTitle.value = "";
//     postDiscription.value = "";

//     // sweet alert

//     Swal.fire({
//         title: "Success",
//         text: "posted successfully",
//         icon: "success"
//       });

//     }

//     else{
//         Swal.fire({
//             title: "Write something?",
//             text: "Please enter something",
//             icon: "question"
//           });
//     }

  

// }

// function selectImg(url, event) {
// 	backgoundImg = url;
// 	var images = document.getElementsByClassName('bg-img');
// 	for (var i = 0; i < images.length; i++) {
// 		images[i].className = ' bg-img';
// 	}
// 	event.target.className += ' image-list-selected';
// }





// function remove(event) {
//     event.target.parentNode.parentNode.remove();

//     posts.className -= ' border-green';
// }


// async function edit(event) {

//     var card = event.target.closest('.card');
//     var titleElement = card.querySelector('.card-title');
//     var descriptionElement = card.querySelector('.card-text');



//     const { value: formValues } = await Swal.fire({
//         title: "Multiple inputs",
//         html: `
//           <input id="swal-input1" class="swal2-input" value = "${titleElement.textContent}">
//           <input id="swal-input2" class="swal2-input" value = "${descriptionElement.textContent}" >
//         `,
//         focusConfirm: false,
//         preConfirm: () => {
//           return [
//             document.getElementById("swal-input1").value,
//             document.getElementById("swal-input2").value
//           ];
//         }
//       });
//       if (formValues) {
//  Swal.fire(JSON.stringify(`Edited successfully`)); 

// }

//     titleElement.textContent = formValues[0];
//     descriptionElement.textContent = formValues[1];

//     postTitle.innerHTML = titleElement.innerHTML;
//     postDiscription.innerHTML = descriptionElement.innerHTML;


// }





var postTitle = document.getElementById('post-title');
var postDiscription = document.getElementById('post-discription');
var postCard = document.getElementById('post-card');

// Global variable for background image
var backgroundImg = '';

function addPosts() {
    var postTitle = document.getElementById('post-title');
    var postDiscription = document.getElementById('post-discription');

    var posts = document.getElementById('posts');

    if (postTitle.value.trim() && postDiscription.value.trim()) {

        // Adding the background image to the card
        posts.innerHTML += `<div class="card mt-3" id="post-card" style="background-image: url('${backgroundImg}'); background-repeat: no-repeat; background-size: cover;">
    <div class="card-header fontStyle">
@Posts
</div>
<div class="card-body">
<h5 class="card-title fontStyle">${postTitle.value}</h5>
<p class="card-text fontStyle">${postDiscription.value}</p>
</div>
<div class="p-3">
<button type="button" onclick="edit(event)" class="btn btn-primary mt-4 fontStyle">Edit</button>
<button type="button" onclick="remove(event)" class="btn btn-danger mt-4 fontStyle">Delete</button>
</div>
</div>`;

        posts.className += ' border-green';

        postTitle.value = "";
        postDiscription.value = "";

        // SweetAlert Success Message
        Swal.fire({
            title: "Success",
            text: "Posted successfully",
            icon: "success"
        });

    } else {
        Swal.fire({
            title: "Write something?",
            text: "Please enter something",
            icon: "question"
        });
    }
}

function selectImg(url, event) {
    // Set the selected image as background
    backgroundImg = url;
    var images = document.getElementsByClassName('bg-img');
    for (var i = 0; i < images.length; i++) {
        images[i].className = 'bg-img';
    }
    event.target.className += ' image-list-selected';
}

function remove(event) {
    event.target.parentNode.parentNode.remove();
    // posts.className -= ' border-green';
}


async function edit(event) {
    var card = event.target.closest('.card');
    var titleElement = card.querySelector('.card-title');
    var descriptionElement = card.querySelector('.card-text');

    const { value: formValues } = await Swal.fire({
        title: "Edit Post",
        html: `
          <input id="swal-input1" class="swal2-input" value = "${titleElement.textContent}">
          <input id="swal-input2" class="swal2-input" value = "${descriptionElement.textContent}" >
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value
          ];
        }
    });

    if (formValues) {
        Swal.fire(JSON.stringify(`Edited successfully`));
    }

    titleElement.textContent = formValues[0];
    descriptionElement.textContent = formValues[1];

    postTitle.innerHTML = titleElement.innerHTML;
    postDiscription.innerHTML = descriptionElement.innerHTML;
}
