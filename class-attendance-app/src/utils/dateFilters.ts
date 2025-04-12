export const filterDates = (data: any[], startDate: Date, endDate: Date) => {
    return data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
    });
};

export const getLast30Days = () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 30);
    return { startDate, endDate };
};

export const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
};