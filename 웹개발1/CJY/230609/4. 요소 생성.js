let div = document.querySelector('div');

function add_a_tag(){
    aTagString = '<a href="https://www.naver.com">네이버로 이동하기!</a>';
    div.innerHTML += aTagString;

    // let aTag = document.createElement('a'); //a 태그 생성
    //
    // // 태그 속성에 값을 지정
    // // aTag.href = 'https://www.naver.com';
    // console.log(aTag.href); //속성 값 가져오기
    // let aHREF = aTag.href;
    // // aTag.text = '네이버로 이동';
    //
    //
    // // 태그의 속성에 값을 지정 (설정만)
    // aTag.setAttribute('href','https://www.naver.com');
    // // 태그의 속성에 값을 가져옴 (가져오는것만)
    // aHREF = aTag.getAttribute('href');
    // console.log(aHREF);
    //
    // // 태그 내부에 텍스트를 넣기!
    // aTag.innerText = '네이버로 이동하기!';
    //
    // div.appendChild(aTag); // div에 자식으로 a태그를 넣는다.
}

function remove_a_tag(){
    div.innerHTML = '';
}