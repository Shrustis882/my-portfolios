function simulateExeDownload() {
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Simulated+Ransomware+Payload';
    link.download = 'fake_ransomware.exe';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
