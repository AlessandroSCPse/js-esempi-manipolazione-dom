const myButton = document.getElementById('my-button');
console.log(myButton);

myButton.addEventListener('click',
    function() {
        // document.querySelector('.my-text').classList.toggle('red');
        document.querySelector('.my-text').classList.add('red');
    }
);