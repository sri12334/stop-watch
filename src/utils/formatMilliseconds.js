/**
 * Formats the milliseconds unit to a specific format.
 *
 * @param {number} milliseconds - The milliseconds unit to be formatted.
 * @returns {string|number} - The formatted milliseconds unit.
 */

const formatMilliseconds = (milliseconds) => {
    let formattedUnit;
    if (milliseconds < 10) {
        formattedUnit = `00${milliseconds}`;
    } else if (milliseconds < 100) {
        formattedUnit = `0${milliseconds}`;
    } else {
        formattedUnit = milliseconds;
    }

    return formattedUnit;
};

export default formatMilliseconds;
