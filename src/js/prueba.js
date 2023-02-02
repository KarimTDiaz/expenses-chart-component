const date = new Date();
const day = date.getDay();

const weekDays = {
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
  sun: 0
};

const weekDaysElement = document.querySelectorAll('.bar');

const printBar = () => {
  weekDaysElement.forEach((element, index) => {
    if (day === Object.values(weekDays)[index]) {
      element.classList.add('day');
    }
  });
};

export { printBar };
