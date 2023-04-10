const input = document.getElementById("semester");
const write = document.getElementById("form");


const ifFunction = (input) => {
    if (input>=12) {
        const content = document.getElementById("write").innerHTML +=`
         Mantab Donatur Tetap`
         return content;
    }
    if (input >=9 && i<=11) {
        const content = document.getElementById("write").innerHTML +=`
        Sebaiknya Jangan Terlalu Gegabah`
        return content;
    }
    else {
        const content =`
        <p>
            <label>IPK/Semester</label>
            <input type="text" name='company'>
        </p>`
        return write.innerHTML +=content;
    }
}
function inputIPK(){
    if (input.value <= 8) {
        for (let i = 1; i <= input.value; i++) {
            ifFunction(input.value);
        }
    }else{
        ifFunction(input.value);
        
    }

    console.log(input.value);
}
