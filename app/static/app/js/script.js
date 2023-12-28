
document.getElementById("openLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});