import formatMilliseconds from '../utils/formatMilliseconds.js';
import formatUnit from '../utils/formatUnit.js';

const updateTimeDom = (timeDom, time) => {
    timeDom.querySelector('.milliseconds').innerText = formatMilliseconds(time.milliseconds);

    if (time.seconds !== time.oldSeconds) {
        timeDom.querySelector('.seconds').innerText = formatUnit(time.seconds);
    }

    if (time.minutes !== time.oldMinutes) {
        timeDom.querySelector('.minutes').innerText = formatUnit(time.minutes);
    }

    time.oldSeconds = time.seconds;
    time.oldMinutes = time.minutes;
};

export default updateTimeDom;
