document.addEventListener('DOMContentLoaded', function() {
    const pre = document.querySelector('pre');
    if (!pre) return;

    const links = pre.querySelectorAll('a[href]');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Skip folder links and parent directory
        if (href.endsWith('/') || href === '../') {
            return;
        }
        
        // Add file-link class
        link.classList.add('file-link');
        
        // Create view icon
        const viewIcon = document.createElement('span');
        viewIcon.className = 'view-icon';
        viewIcon.title = 'View file';
        viewIcon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.open(href, '_blank');
        });
        
        link.parentNode.insertBefore(viewIcon, link.nextSibling);
    });
});
