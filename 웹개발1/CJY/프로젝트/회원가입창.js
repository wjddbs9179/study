function add_phone_input(){
    let phoneBox = document.getElementById('phoneBox');
    if(phoneBox.getElementsByTagName('input').length===2)
        return;
    phoneBox.innerHTML = '<input pattern="\\d*" type="text" maxlength="4" name="phone2" id="phone2">\n' +
        '                    - \n' +
        '                    <input pattern="\\d*" type="text" maxlength="4" name="phone3" id="phone3">'
}