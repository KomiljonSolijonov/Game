const bodyEl = document.getElementById('mybody')
const mynumber = document.getElementById('number')
const javob = document.getElementById('tekshirish')
const par = document.getElementById('comp')
const names = document.getElementById('name')

javob.addEventListener('click' , function(e){
    e.preventDefault
    const random = Math.floor(Math.random() * 2)+1
    if (mynumber.value==random) {
        par.innerText = `${names.value} topdingiz, bu ${random} edi !`
        bodyEl.classList =('redcolor')
    }
    else {
        par.innerText = `${names.value} topolmadingiz, bu ${random} edi !`
        bodyEl.classList =('greencolor')
    }
})