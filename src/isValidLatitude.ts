import isDecimal from './isDecimal';
import isSexagesimal from './isSexagesimal';
import sexagesimalToDecimal from './sexagesimalToDecimal';
import { MAXLAT, MINLAT } from './constants';

// TODO: Add tests
const isValidLatitude = (value: any): boolean => {
    if (isDecimal(value)) {
        if (parseFloat(value as string) > MAXLAT || value < MINLAT) {
            return false;
        }

        return true;
    }

    if (isSexagesimal(value)) {
        return isValidLatitude(sexagesimalToDecimal(value));
    }

    return false;
};

export default isValidLatitude;
