function text_decoration_change(check) {

    let div = document.querySelector('div');
    if (check === 'border') {
        let borderCheckBox = document.getElementById('border-check');
        if (borderCheckBox.checked) {
            div.classList.remove(check);
        }else{
            div.classList.add(check);
        }
    }
    div.classList.toggle(check);
}

function text_line_change(className) {
    let div = document.querySelector('div');
    div.classList.remove('solid');
    div.classList.remove('dotted');
    div.classList.remove('dashed');
    div.classList.remove('double');
    div.classList.add(className);
}