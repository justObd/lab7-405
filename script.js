
function addPhotoToGalleryDiv(imgElem){
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(imgElem);
    
    }
    function addDeleteButton(imgElem){
        const deleteButton=document.createElement("button");
        deleteButton.innerText="X";
        deleteButton.addEventListener('click',function(){
            imgElem.remove();
            deleteButton.remove();
        });
        const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(deleteButton);
       
    }
    
    
    function createImgElement(photoURL){
        const imgElem = document.createElement('img');
        imgElem.src = photoURL;
        imgElem.alt='photo of cat'
        return imgElem;
    }
    
    
    function addPhoto(){
        const photoURL = prompt("Enter the URL of the photo:");
       const imgElem = createImgElement(photoURL);
       addPhotoToGalleryDiv(imgElem);
       const deleteButton = addDeleteButton(imgElem);
       addPhotoToGalleryDiv(deleteButton);
    
    
    }
    
    const addPhotoBtn = document.getElementById('addPhotoBtn');
    addPhotoBtn.addEventListener('click',addPhoto);