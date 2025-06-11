const brainrots = [
  "Tralalero Tralala", "Bombardiro Crocodilo", "Tung Tung Sahur", "Lirili Larilà", "Boneca Ambalabu",
  "Brr Brr Patapim", "Chimpanzini Bananini", "Bombombini Gusini", "Capuccino Assassino", "Trippi Troppi",
  "Frigo Camelo", "La Vaca Saturno Saturnita", "Ballerina Cappucina", "U Din Din Din Dun", "Trulimero Trulicina",
  "Garamaraman Madudungdung", "Girafa Celestre", "Bobrito Bandito", "Fruli Frula", "Ta Ta Sahur",
  "Pot Hotspot", "Brri Brri Bombicus", "Burbaloni Lulilolli", "Talpa Di Ferro", "Blueberrinni Octopussini",
  "Glorbo Fruttodrillo", "Cacto Hipopotamo", "Chef Crabracadabra", "Abonono Schimpazinono", "Svinino Bombondino",
  "Bombardiere Lucertola", "Rhinodino Dildorino", "Tric Trac Baraboom", "Centralucci Nuclearucci",
  "Orangutini Ananasini", "Espressona Signora", "Zibra Zubra Zibralini", "Graipussi Medussi", "Tigrrullini Watermellini"
];

const descriptions = [
  "Tralalero Tralala adalah jiwa yang ceria, selalu membawa keceriaan dan lagu-lagu manis ke mana pun kamu pergi.",
  "Bombardiro Crocodilo punya energi kuat, penuh semangat dan tidak mudah menyerah walau tantangan datang.",
  "Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur adalah sosok yang sabar dan penuh kesabaran, meski kadang suka bikin orang bingung.",
  "Lirili Larilà adalah pribadi lembut dan penuh imajinasi, selalu melihat dunia dengan warna-warni yang berbeda.",
  "Boneca Ambalabu itu kreatif dan penuh warna, kamu punya ide-ide liar yang membuat semua orang terpukau.",
  "Brr Brr Patapim sosok misterius yang kalem tapi menyimpan kejutan yang luar biasa dalam diamnya.",
  "Chimpanzini Bananini penuh semangat petualang, selalu siap mencoba hal baru dan suka tantangan.",
  "Bombombini Gusini seperti kembang api, cerah dan memukau tapi kadang tiba-tiba menghilang.",
  "Capuccino Assassino dingin dan tajam, tapi sebenarnya penuh perhatian dan detail terhadap hal-hal kecil.",
  "Trippi Troppi adalah jiwa bebas yang tidak terikat aturan, selalu mencari kebebasan dan keseruan.",
  "Frigo Camelo itu tenang dan tahan banting, mampu bertahan di berbagai kondisi tanpa banyak keluhan.",
  "La Vaca Saturno Saturnita unik dan penuh teka-teki, kamu suka hal-hal yang gak biasa dan eksentrik.",
  "Ballerina Cappucina anggun dan penuh gaya, kamu bisa memukau semua orang dengan pesonamu.",
  "U Din Din Din Din Dun Ma Din Din Din Dun2 penuh ritme dan energi, kamu hidup seperti musik yang tak pernah berhenti.",
  "Trulimero Trulicina seperti teka-teki, sulit ditebak tapi selalu menarik untuk diikuti.",
  "Garamaraman dan Madudungdung tak tuntung perkuntung itu liar dan spontan, kamu penuh kejutan yang tak terduga.",
  "Girafa Celestre tinggi dan elegan, kamu selalu melihat sesuatu dari sudut pandang yang lebih luas.",
  "Bobrito Bandito penuh selera humor dan nakal, kamu suka bikin orang tertawa dan seringkali jadi pusat perhatian.",
  "Fruli Frula manis dan ceria, kamu mudah membuat suasana jadi menyenangkan dan ringan.",
  "Ta Ta Ta Ta Ta Ta Ta Ta Ta Ta Ta Sahur punya energi yang tak pernah habis, selalu siap untuk semangat baru tiap hari.",
  "Pot Hotspot penuh kehangatan dan perhatian, kamu seperti tempat berkumpul yang nyaman bagi teman-temanmu.",
  "Brri Brri Bicus Dicus Bombicus seperti ledakan kecil yang bikin heboh, kamu dinamis dan selalu aktif.",
  "Burbaloni Lulilolli imut dan menggemaskan, kamu membawa aura positif dan kebahagiaan di sekitar.",
  "Talpa Di Ferro kuat dan tahan banting, kamu tidak mudah goyah oleh masalah dan punya tekad baja.",
  "Blueberrinni Octopussini kreatif dan serbaguna, kamu bisa melakukan banyak hal sekaligus dengan mudah.",
  "Glorbo Fruttodrillo seperti kombinasi unik, kamu punya cara pandang dan solusi yang out of the box.",
  "II Cacto Hipopotamo keras di luar tapi lembut di hati, kamu kuat tapi punya sisi perhatian yang besar.",
  "Chef Crabracadabra jagoan dapur yang penuh keajaiban, kamu selalu punya trik dan solusi kreatif.",
  "Abonono Schimpazinono pintar dan cerdik, kamu suka belajar hal baru dan cepat menguasainya.",
  "Svinino Bombondino punya jiwa bebas dan penuh semangat, kamu tidak suka dibatasi oleh aturan.",
  "Bombardiere Lucertola tangguh dan cepat, kamu selalu siap menghadapi segala tantangan dengan sigap.",
  "Rhinodino Dildorino kuat dan berani, kamu seperti pelindung yang setia untuk orang-orang terdekat.",
  "Tric Trac Baraboom penuh kejutan dan spontan, kamu selalu membuat hari orang lain berwarna.",
  "Centralucci Nuclearucci seperti pusat energi, kamu penuh kekuatan yang mempengaruhi banyak orang.",
  "Orangutini Ananasini cerdas dan penuh rasa ingin tahu, kamu selalu menggali hal baru dengan antusias.",
  "Espressona Signora anggun dan penuh karisma, kamu punya daya tarik yang sulit ditolak.",
  "Zibra Zubra Zibralini penuh warna dan dinamis, kamu unik dan mudah dikenali dalam keramaian.",
  "Graipussi Medussi misterius dan memikat, kamu punya aura yang membuat orang ingin tahu lebih banyak.",
  "Tigrrullini Watermellini kuat dan penuh semangat, kamu tidak pernah berhenti berjuang dan berkembang."
];

const questions = [
  { question: "Kamu lebih suka ngabisin waktu...", options: ["di taman sendirian", "nongkrong rame", "scroll TikTok sampai pagi", "tidur sepanjang hari", "bikin playlist absurd"] },
  { question: "Pilih makanan favorit:", options: ["Mie pedas", "Sereal dingin", "Pizza nanas", "Nasi padang campur es krim", "Roti bakar coklat keju"] },
  { question: "Kalo denger lagu favorit kamu, reaksi kamu?", options: ["Joget auto goyang", "Nangis di pojokan", "Ngomel random", "Replay 100x", "Langsung update status"] },
  { question: "Kebiasaan pas gabut?", options: ["Ngobrol sama hewan peliharaan", "Liat kipas muter", "Nonton video masak jam 3 pagi", "Bikin teori konspirasi", "Scroll reels absurd"] },
  { question: "Kalau kamu jadi hewan, kamu bakal jadi...", options: ["Kucing jutek", "Burung cerewet", "Lumba-lumba hype", "Kura-kura santai", "Gorila ngedance"] },
  { question: "Pilih warna yang paling kamu suka:", options: ["Pink neon", "Hitam legam", "Hijau stabilo", "Biru pastel", "Oranye gonjreng"] },
  { question: "Sifat yang paling menggambarkan kamu:", options: ["Chaos tapi lucu", "Santai tapi peka", "Kreatif ngasal", "Suka cari perhatian", "Random banget"] },
  { question: "Kalau disuruh tampil di panggung, kamu...", options: ["Joget tanpa mikir", "Ngomong ngelantur", "Kabur ke belakang", "Berdiri bengong", "Nyanyi fals pede"] },
  { question: "Ngomongin fashion, gaya kamu...", options: ["Kemeja + crocs", "Kaos band + dasi", "Piyama 24/7", "Kostum karakter", "Outfit misterius"] },
  { question: "Kalau teman kamu nangis, kamu...", options: ["Ikut nangis rame-rame", "Peluk terus diem", "Ngasih meme biar ketawa", "Ngomongin alien", "Bikin suara aneh"] },
  { question: "Kamu lebih suka nonton...", options: ["Film horor lucu", "Dokumenter hewan absurd", "Drama alien nangis", "Komedi nggak jelas", "Video TikTok 2 detik"] },
  { question: "Kalau disuruh milih nama alter ego:", options: ["Mr. Bubur", "Kak Kulkas", "Neng Nasi Goreng", "Lord Panci", "Om Sereal"] },
  { question: "Apa yang paling bikin kamu ngakak?", options: ["Suara sendawa kucing", "Orang ngelantur", "Parodi Shakespeare", "Suara motor mogok", "Komentar netizen"] },
  { question: "Kalau kamu jadi presiden, hal pertama yang kamu lakukan:", options: ["Gratisin nasi padang", "Bikin hari nasional TikTok", "Semua sekolah pake kostum", "Bikin taman lompat", "Siaran live tiap pagi"] },
  { question: "Kalau punya kekuatan super aneh, kamu mau...", options: ["Ngubah suara jadi bebek", "Teleport ke dapur orang", "Membelah pisang dengan pikiran", "Ngilangin suara kentut", "Nari di awan"] }
];

let currentQuestion = 0;
let answerCount = {};

const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

function showQuestion() {
  if (currentQuestion >= questions.length) return showResult();

  quizDiv.innerHTML = "";
  const q = questions[currentQuestion];
  const qDiv = document.createElement("div");
  qDiv.className = "question";
  qDiv.innerHTML = `<h3>${q.question}</h3>`;
  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  q.options.forEach(opt => {
    const randomBrainrot = brainrots[Math.floor(Math.random() * brainrots.length)];
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      answerCount[randomBrainrot] = (answerCount[randomBrainrot] || 0) + 1;
      currentQuestion++;
      showQuestion();
    };
    optionsDiv.appendChild(btn);
  });

  qDiv.appendChild(optionsDiv);
  quizDiv.appendChild(qDiv);
}

function showResult() {
  quizDiv.innerHTML = "";
  const result = Object.entries(answerCount).sort((a, b) => b[1] - a[1])[0][0];
  const description = descriptions[brainrots.indexOf(result)];
  resultDiv.innerHTML = `
    <h2>Brainrot Kamu: ${result}</h2>
    <p>${description}</p>
    <button id="play-again">Main Lagi</button>
  `;

  document.getElementById("play-again").onclick = resetQuiz;
}

function resetQuiz() {
  currentQuestion = 0;
  answerCount = {};
  resultDiv.innerHTML = "";
  showQuestion();
}

showQuestion();
