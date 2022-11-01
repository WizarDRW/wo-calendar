function createNativeLocaleFormatter(locale: string, getOptions: Function) {
    const emptyFormatter = (_t: any, _s: any) => '';

    if (typeof Intl === 'undefined' || typeof Intl.DateTimeFormat === 'undefined') {
        return emptyFormatter;
    }

    return (timestamp: any, short: any) => {
        try {
            const intlFormatter = new Intl.DateTimeFormat(locale || undefined, getOptions(timestamp, short));
            return intlFormatter.format(timestampToDate(timestamp));
        } catch (e) {
            return '';
        }
    };
}

function timestampToDate(timestamp: any) {
    const time = `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
    const date = timestamp.date;
    return new Date(`${date}T${time}:00+00:00`);
}

function padNumber(x: any, length: any) {
    let padded = String(x);

    while (padded.length < length) {
        padded = '0' + padded;
    }

    return padded;
}

export default createNativeLocaleFormatter