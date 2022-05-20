let box = document.getElementById('box');

box.addEventListener('dragover', function(e){
    e.preventDefault();
    console.log('hello');
})

box.addEventListener('drop',function(e){
    e.preventDefault();
})
