import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('returns current year', () => {
    expect(getFullYear()).tobe(2023);
});

test('returns correct string', () => {
    expect(getFooterCopy(true)).tobe('Holberton School');
    expect(getFooterCopy(false)).tobe('Holberton School main dashboard');
});

test('returns the latest notification', () => {
    expect(getLatestNotification()).tobe('<strong>Urgent requirement</strong> - complete by EOD')
});