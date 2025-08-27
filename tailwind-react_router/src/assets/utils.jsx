    export const domainFromUrl = (url) => {
        try {
            return new URL(url).hostname.replace(/^www\./, "")
        } catch {
            return ''
        }
    }

    export const formatData = (iso) => {
        try {
            const dateObj = new Date(iso); // d ist ein JavaScript Date Objekt.
            if(isNaN(dateObj.getTime())) return '';

            // z. B. auf Deutsch „27. Aug. 2025, 04:07“ oder auf Englisch „Aug 27, 2025, 4:07 AM“
            return dateObj.toLocaleString(undefined, {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch {
            return ''
        }
    }