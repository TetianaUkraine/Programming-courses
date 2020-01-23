document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ua-Ua', {
        currency: 'grn',
        style: 'currency'
    }).format(node.textContent)
});