document.getElementById('drawBtn').addEventListener('click', () => {
    const participantsText = document.getElementById('participants').value;
    const prize = document.getElementById('prizeName').value;
    const winnerDisplay = document.getElementById('winner');
    const resultArea = document.getElementById('resultArea');

    const names = participantsText.split('\n').filter(name => name.trim() !== "");

    if (names.length === 0) {
        alert("請輸入至少一位參與者！");
        return;
    }

    const winner = names[Math.floor(Math.random() * names.length)];
    
    winnerDisplay.innerText = `${winner} 獲得了 ${prize || '獎勵'}！`;
    resultArea.classList.remove('hidden');
});
