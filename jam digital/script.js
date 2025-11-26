let jalan = false;
let interval;        

// fungsi menambahkan awalan nol
function duaDigit(angka) {
  return angka < 10 ? "0" + angka : angka;
}

// fungsi menampilkan waktu
function updateWaktu() {
  const sekarang = new Date();

  const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const bulanList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const hari = hariList[sekarang.getDay()];
  const tanggal = sekarang.getDate();
  const bulan = bulanList[sekarang.getMonth()];
  const tahun = sekarang.getFullYear();

  $("#tanggal").text(`${hari}, ${tanggal} ${bulan} ${tahun}`);

  const jam = duaDigit(sekarang.getHours());
  const menit = duaDigit(sekarang.getMinutes());
  const detik = duaDigit(sekarang.getSeconds());

  $("#jam").text(`${jam}:${menit}:${detik}`);
}

$("#start").on("click", function() {
  if (!jalan) {
    jalan = true;
    updateWaktu();
    interval = setInterval(updateWaktu, 1000);
    $(this).text("STOP");
  } else {
    jalan = false;
    clearInterval(interval);
    $(this).text("START");
  }
});
