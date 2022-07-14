export const DateFormat = date => {
    const newDate = new Date(date);
    return newDate.toDateString()
};