let fileInput = document.getElementById('input-file');
let uploadImg = document.getElementById('upload-img');

uploadImg.addEventListener('click',function(){
    fileInput.click();
})



fileInput.addEventListener('change', function(){
    [...this.files].forEach(file => {

        if(file.type.startsWith("image/")){
            let reader = new FileReader();
            reader.onload = function(){
                let newImgDiv = document.createElement('div');
                newImgDiv.classList.add('fileImgDIv');
                document.body.appendChild(newImgDiv);
                let newImg = document.createElement('img');
                newImg.setAttribute('src',reader.result);
                newImg.classList.add('fileImg');
                newImgDiv.appendChild(newImg);
                var newSpan = document.createElement('span');
                newSpan.classList.add('fileSpan');
                newSpan.innerText = 'X';
                newImgDiv.appendChild(newSpan);
                newSpan.addEventListener('click', function(){
                    newImgDiv.remove();
                })
            }
    
            reader.readAsDataURL(file);
        }else{
            alert('yanlis format');
            this.value = '';
        }
    });
})


