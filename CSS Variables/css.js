(function(){
    
    let inputs = document.querySelectorAll('.controls input');
    console.log(inputs);
    function handleUpdate() {
        // console.log(this.value);
        let suffix = this.dataset.sizing || '';
        // console.log(suffix);
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

})();
