const championData = {
  assassin: {
    img: 'assassin-champion.png',
    text: 'Capuccino Assasino'
  },
  fighter: {
    img: 'fighter-champion.png',
    text: 'Tung Tung Sahur'
  },
  mage: {
    img: 'mage-champion.png',
    text: 'Pot Pot Hotspot'
  },
  marksman: {
    img: 'marksman-champion.png',
    text: 'Bobrito Bandito'
  },

  tank: {
    img: 'tank-champion.png',
    text: 'Bombardilo Crocodilo'
  }
};

function showChampion(role) {
  const imgElement = document.getElementById('champion-image');
  const textElement = document.getElementById('champion-text');
  
  imgElement.style.opacity = 0;
  textElement.style.opacity = 0;

  setTimeout(() => {
    imgElement.src = championData[role].img;
    textElement.textContent = championData[role].text;

    imgElement.style.opacity = 1;
    textElement.style.opacity = 1;
    
    
    



  }, 300);
}
