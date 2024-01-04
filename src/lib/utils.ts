export const getDateFromString = (dateString : string) =>{
    return new Date(Date.parse(dateString))
}
export const formatDateShort = (dateString : string) => {
    const date = getDateFromString(dateString)
    return date.toISOString().split('T')[0];
}

export const formatDateLong = (dateString : string) => {
    const date = getDateFromString(dateString)
    
    return date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

