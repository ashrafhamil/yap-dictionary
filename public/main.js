// main.js

// Map component names to their file paths
const components = {
    button: '/components/button.html',
    header: '/components/header.html',
    footer: '/components/footer.html',
    sidenav: '/components/sidenav.html',
    sidenavright: '/components/sidenavright.html',
    modal: '/components/modal.html',
    accordion: '/components/accordion.html',
    tooltip: '/components/tooltip.html',
    card: '/components/card.html',
    pagination: '/components/pagination.html',
    toastnotification: '/components/toastnotification.html',
    dropdownmenu: '/components/dropdownmenu.html',
    breadcrumb: '/components/breadcrumb.html',
    rating: '/components/rating.html',
    progressbar: '/components/progressbar.html',
    searchbar: '/components/searchbar.html',
    spinner: '/components/spinner.html',
    switch: '/components/switch.html',
    sourcecode: '/components/sourcecode.html',
};

// Function to load the selected component into the iframe
function loadComponent(component) {
    const iframe = document.getElementById('previewFrame');
    const filePath = components[component];

    if (filePath) {
        iframe.src = filePath;  // Set the iframe source to the component file path
    } else {
        console.error(`Component "${component}" not found.`);
        iframe.srcdoc = `<h1>Component not found</h1>`;  // If the component is not found, show an error message in the iframe
    }
}
