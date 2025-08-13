const API_BASE = 'http://localhost:4008/api/authors';

// HTML Elements
const tbody = document.getElementById('tbody'); // querySelector
const loading = document.getElementById('loading');
const tableWrap = document.getElementById('tableWrap');
const alertBox = document.getElementById('alertBox');
const countBadge = document.getElementById('countBadge');
const refreshBtn = document.getElementById('refreshBtn');

// fetch Authors 
async function fetchAuthors(params = {}) {
    const url = new URL(API_BASE);

    try {
        const res = await fetch(url, {
            headers: { 'Accept': 'application/json'}
        })
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);

        const data = await res.json();
        console.log(data);
        renderTable(data || []);
    } catch (err) {
        showAlert(err.message || 'Failed to load data')
    }
}

function showAlert(msg) {
    alertBox.textContent = msg;
    alertBox.classList.remove('d-none')
}

function renderTable () {

}

fetchAuthors();