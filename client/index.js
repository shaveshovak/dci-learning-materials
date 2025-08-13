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

        countBadge.textContent = data.total ?? (data ? data.length : 0);

        renderTable(data || []);
    } catch (err) {
        showAlert(err.message || 'Failed to load data')
    } finally {
        showLoading(false);
    }
}

function showAlert(msg) {
    alertBox.textContent = msg;
    alertBox.classList.remove('d-none')
}

function showLoading (show) {
    loading.classList.toggle('d-none', !show)
}

function renderTable (items) {
    tbody.innerHTML = items.map(a => {
        const fullName = [a.firstName, a.lastName].filter(Boolean).join(' ');
        const nationality = a.nationality || '-';
        const birthDate = a.birthDate ? new Date(a.birthDate).toLocaleDateString() : '-';
        const genres = (a.genres && a.genres.length) ? a.genres.join(', ') : '-';
        const booksPublished = Number.isFinite(a.booksPublished) ? a.booksPublished : '-';

        return `
            <tr>
                <td>${fullName}</td>
                <td>${nationality}</td>
                <td>${birthDate}</td>
                <td>${genres}</td>
                <td>${booksPublished}</td>
            </td>
        `

    }).join('');
    tableWrap.classList.toggle('d-none', items.length === 0);
}

fetchAuthors();