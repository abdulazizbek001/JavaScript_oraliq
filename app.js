const elInput1 = document.querySelector('.input1');
const elInput2 = document.querySelector('.input2');
const elBtn = document.querySelector('.btn');
const elRezult = document.querySelector('.rezult');

// ============================= BTN START ============================= //

elBtn.addEventListener('click', () => {
    const arr = [];
    for (let i = elInput1.value; i <= elInput2.value; i++) {
        arr.push(i);
    }


    function nimadir(start, end) {
        if(arr.length > 15){
            const newDiv= document.createElement('p')
           newDiv.textContent = arr;
           elRezult.append(newDiv)
        }else if(arr.length < 15){
            elRezult.textContent = arr;
        }
    }

    nimadir(elInput1.value, elInput2.value);

    elInput1.addEventListener('input', () => {
        elRezult.style.display = 'none';
    })

    elInput2.addEventListener('input', () => {
        elRezult.style.display = 'none';
    })

    if (elInput1.value == '') {
        elRezult.textContent = 'Iltimos: raqam kiriting!';
    } else if (elInput2.value == '') {
        elRezult.textContent = 'Iltimos: raqam kiriting!';
    }
});

// ============================= BTN END ============================= //