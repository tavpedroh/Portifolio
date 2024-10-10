
const clearButton = document.getElementById('Button');

clearButton.addEventListener('click', function(){
    const form = document.getElementById('contato__form');
    form.reset();
});