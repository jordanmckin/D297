function search_for_page() {
    
    const current_pages = {
        "home": "index.html",
        "dogs": "dogs.html",
        "cats": "cats.html",
        "fish": "fish.html",
        "faq": "faq.html",
        "contact": "contact.html"
    };


    let search_result = document.getElementById('search_input').value.toLowerCase().trim();

    if (current_pages[search_result]) {
        window.location.href = current_pages[search_result];
    } else {
        return false;
    }
    return false;
}