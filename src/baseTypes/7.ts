/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
	monday = 'monday',
	wednesday = 'wednesday ',
	thursday = 'thursday ',
	friday = 'friday ',
	saturday = 'saturday ',
	sunday = 'sunday',
}

function isWeekend(dayOfWeeK: WeekDays): boolean {
	return dayOfWeeK === WeekDays.saturday || dayOfWeeK === WeekDays.sunday
}
