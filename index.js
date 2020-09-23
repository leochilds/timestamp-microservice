const getDateTimeFromString = (date_string) => {
    let date = date_string ? new Date(date_string) : new Date();
    return date;
}

