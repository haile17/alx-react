export const getFullYear = () => {
    return new Date().getFullYear();
}

export const  getFooterCopy = (isIndex) => {
    if (isIndex === true){
        return 'Holberton School';
    } else if (isIndex === false) {
        return 'Holberton School main dashboard'
    }
}
export const  getLatestNotification = () => 
    '<strong>Urgent requirement</strong> - complete by EOD'


