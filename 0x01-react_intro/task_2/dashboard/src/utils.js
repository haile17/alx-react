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

export { getFullYear, getFooterCopy}