document.addEventListener('DOMContentLoaded', () => {
    const newRoot = document.createElement('app-root');
    document.body.insertBefore(newRoot, document.body.firstChild);
    newRoot.setAttribute('class', 'jupytangular');
    document.body.style.position = '';
});
const s = document.createElement('script');
s.setAttribute('type', 'text/javascript');
s.innerHTML = `
    window.BackupPromise = window.Promise;
    window.SOCKIFY_SERVER = \'http://localhost:8000\';
    `;
(document.head || document.documentElement).appendChild(s);


