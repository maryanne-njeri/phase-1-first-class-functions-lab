// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (..._drivers) => {

    let result = drivers.filter((driver) => {
        return driver.length > 6 || driver.length == 4;
    });

    return result;
};

const returnLastTwoDrivers = (..._drivers) => {

    let result = drivers.filter((driver) => {
        return driver.length == 5 || driver.length == 2;
    });

    return result;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const quintupler = 5;

function createFareMultiplier(_quintupler) {

    const fareQuintupler = () => {
        let result = quintupler * 5;
        return result;
    }

    return fareQuintupler;
}

const fareTimesTen = 10;

const fareDoubler = (_fareTimesTen) => {
    let result = fareTimesTen * 2;
    return result;
}

const fareTimesTwelve = 12;

const fareTripler = (_fareTimesTwelve) => {
    let result = fareTimesTwelve * 3;
    return result;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
}