export const formatted = (date: string): string => {
    const inputDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    return inputDate.toLocaleDateString('en-US', options);
};