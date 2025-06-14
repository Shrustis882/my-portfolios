// Simulate encrypting files visually
function simulateEncryption() {
    const files = ['Documents', 'Photos', 'Videos'];
    const output = document.getElementById('demoOutput');
    output.innerHTML = '<p>> Encrypting files...</p>';
    
    files.forEach((file, i) => {
        setTimeout(() => {
            output.innerHTML += `<p>> Encrypted: C:\\Users\\Victim\\${file} <span style="color: var(--red);">[LOCKED]</span></p>`;
            if (i === files.length - 1) {
                output.innerHTML += `<div class="ransom-note">
                    <h3><i class="fas fa-skull-crossbones"></i> YOUR FILES ARE ENCRYPTED!</h3>
                    <p>Pay 0.1 BTC to: <code>bc1qxyz...</code></p>
                </div>`;
            }
        }, i * 1000);
    });
}
