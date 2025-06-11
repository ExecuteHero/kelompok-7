const khodams = [
      { nama: "brrr brrr patapim", gambar: "brbrpatapim.png" },
      { nama: "Tung Tung Sahur", gambar: "sahur.png" },
      { nama: "Saturno Saturnita", gambar: "saturnosaturnita.png" },
      { nama: "Tralalero Tralala", gambar: "Tralalero.png" },
      { nama: "Bombardilo Crocodilo", gambar: "crocodilo.png" },
      { nama: "Boneca Ambalabu", gambar: "BonecaAmbalabu.png" },
      { nama: "Bobrito Bandito", gambar: "bandito.png" },
      { nama: "Capuccino Assasino", gambar: "cappucino.png" },
      { nama: "Chimpanzini Bananini", gambar: "ChimpanziniBananini.png" },
      { nama: "Kosong", gambar: "kosong.png" },
      
    ];

    function cekKhodam() {
      const namaInput = document.getElementById("nama").value.trim();
      const errorEl = document.getElementById("error");
      const resultEl = document.getElementById("result");
      const hasilTeks = document.getElementById("hasilTeks");
      const gambarEl = document.getElementById("gambarKhodam");

      if (namaInput === "") {
        errorEl.textContent = "Nama tidak boleh kosong!";
        resultEl.style.display = "none";
        return;
      }

      errorEl.textContent = "";
      const khodam = khodams[Math.floor(Math.random() * khodams.length)];
      hasilTeks.textContent = `Khodam yang ada di dalam ${namaInput} adalah: ${khodam.nama}`;
      gambarEl.src = khodam.gambar;
      resultEl.style.display = "block";
    }