document.addEventListener('DOMContentLoaded', function() {
    let newP = document.querySelector('p');
    newP.textContent = 'This is really cool!';
    document.querySelector('#text').append(newP);
});

