const formContainer = document.getElementById('form');
const addRemoveButton = document.getElementById('submit');
const submitButton = document.getElementById('submitButton');

// Fungsi untuk menghapus semua input form dan label dari paragraf kedua ke bawah
function resetForm() {
    const secondParagraph = formContainer.querySelector('p:nth-child(2)');
    while (secondParagraph.nextSibling) {
        formContainer.removeChild(secondParagraph.nextSibling);
    }
}

function resetPicture() {
    const picture = document.getElementById('picture');
    // picture.src = 'assets/img/placeholder.png';
}

// Fungsi untuk menambahkan input form dan label
function addForm() {
  const inputCount = document.getElementById('semesterCount').value;
  const rightPane= document.getElementById('rightPane');

  resetForm(); // Hapus semua input form dan label dari paragraf kedua ke bawah
  resetPicture(); // Reset gambar

    if (inputCount > 8) {
        rightPane.innerHTML = `Mau Ngapain Loe`;
        
    }else{

        for (let i = 0; i < inputCount; i++) {
            // Buat dua input dan dua label untuk setiap input
            for (let j = 0; j < 2; j++) {
                const inputLabel = document.createElement('label');
                const labelNames = [`IPK Semester ${i+1} `, `Total SKS Sem. ${i+1}`];
                inputLabel.for = `input-${i}-${j}`;
                inputLabel.textContent = labelNames[j];
    
                const input = document.createElement('input');
                const inputTypes = ['number', 'number'];
                const inputNames = [`ipk-${i+1}`, `sks-${i+1}`];
                const inputIds = [`ipk-${i+1}`, `sks-${i+1}`];
                const inputMin = [0, 0];
                const inputMax = [4, 25];
                const inputStep = [0.01, 1];
                const inputPlaceholder = [`Range 0-4`, `Range 0-25`];
                input.type = inputTypes[j];
                input.name = inputNames[j];
                input.id = inputIds[j];
                input.className = 'inputValue';
                input.min = inputMin[j];
                input.max = inputMax[j];
                input.step = inputStep[j];
                input.placeholder = inputPlaceholder[j];
            input.addEventListener('input', validateForm); // Menambahkan event listener untuk validasi form
    
                const inputContainer = document.createElement('p');
                inputContainer.appendChild(inputLabel);
                inputContainer.appendChild(input);
    
                formContainer.appendChild(inputContainer);
            }
        }
    }


  validateForm(); // Validasi form setelah menambahkan input form dan label baru
}

// Fungsi untuk memvalidasi form dan menentukan apakah tombol submit harus di-disable
function validateForm() {
  const inputs = formContainer.getElementsByClassName('inputValue');
  let allInputsFilled = true;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '' || inputs[i].value === null) {
      document.getElementById('submitButton').style.cursor = 'not-allowed';// Disable tombol submit jika ada setidaknya satu input yang belum diisi
      break;
    }else{
        document.getElementById('submitButton').style.cursor = 'pointer';
        document.getElementById('submitButton').removeAttribute("data-tooltip");

    }
    
  }


}

addRemoveButton.addEventListener('click', function() {
  const inputCount = document.getElementById('semesterCount').value;

  if (inputCount == 0) {
    resetForm(); // Jika inputCount adalah 0, hapus semua input form dan label
  } else {
    addForm(); // Jika inputCount bukan 0, tambahkan input form dan label
  }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form berhasil dikirim!'); // Ganti dengan kode pengiriman form ke server yang sesuai
});
