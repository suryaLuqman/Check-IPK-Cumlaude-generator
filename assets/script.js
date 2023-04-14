const formContainer = document.getElementById('form');
const addButton = document.getElementById('submit');

// Fungsi untuk menghapus semua input form dan label dari paragraf kedua ke bawah
function resetForm() {
  const secondParagraph = formContainer.querySelector('p:nth-child(2)');
  while (secondParagraph.nextSibling) {
    formContainer.removeChild(secondParagraph.nextSibling);
  }
}

function resetPicture(){
    const rightPane=document.getElementById('rightPane');
    rightPane.innerHTML="";
}

// Fungsi untuk menambahkan input form dan label
function addForm() {
  const semesterCount = document.getElementById('semesterCount').value;

    resetForm(); // Hapus semua input form dan label dari paragraf kedua ke bawah
    resetPicture();

    if (semesterCount <= 8){
        
        for (let i = 0; i < semesterCount; i++) {
          // Buat dua input dan dua label untuk setiap input
          for (let j = 0; j < 2; j++) {
            const inputLabel = document.createElement('label');
            const labelName=['IPK Semester','Total SKS']
            inputLabel.for = `input-${i}-${j}`;
          //   inputLabel.textContent = `Input ${i+1} (${j+1}):`;
            inputLabel.textContent = `${labelName[j]} ${i+1}:`;
      
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `input-${i}-${j}`;
            input.id = `input-${i}-${j}`;
            input.placeholder = `semester ${i+1} `;
      
            const inputContainer = document.createElement('p');
            inputContainer.appendChild(inputLabel);
            inputContainer.appendChild(input);
      
            formContainer.appendChild(inputContainer);
          }
        }
    }else{
        // alert("Maksimal 8 Semester");
        const rightPane=document.getElementById('rightPane');
        rightPane.innerHTML="Loe Mau Ngapain?Jadi Donatur Tetap?";
    }

}

addButton.addEventListener('click', function() {
  addForm();
});

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah form dikirim ke server
  addForm();
});
