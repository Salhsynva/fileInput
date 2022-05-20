let box = document.getElementById('box');

box.addEventListener('dragover', function(e){
    e.preventDefault();
    console.log('heo');
})

box.addEventListener('drop',function(e){
    e.preventDefault();
})