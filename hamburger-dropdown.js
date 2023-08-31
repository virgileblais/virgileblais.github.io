document.getElementById('hamburger-icon-container').addEventListener('click', function() {
    const dropdown = document.getElementById('hamburger-dropdown');
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
    } else {
        dropdown.classList.add('hidden');
    }
});
