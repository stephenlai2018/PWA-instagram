var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

// once button is clicked, banner is prompted to ask if user wants to add the icon to home screen
shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

// function openCreatePostModal() {
//   createPostArea.style.display = 'block';
//   if(deferredPrompt) {
//     deferredPrompt.prompt();
//     deferredPrompt.userChoice.then(choiceResult => {
//       console.log(choiceResult.outcome);

//       if(choiceResult.outcome === "dismissed") {
//         console.log("User cancelled installation");
//       }
//       else {
//         console.log("User added to home screen");
//       }  
//     });

//     deferredPrompt = null;
//   }
// }




