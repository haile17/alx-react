function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex === true){
        return 'Holberton School';
    } else if (isIndex === false) {
        return 'Holberton School main dashboard'
    }
}

function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}

export { getFullYear, getFooterCopy}