import type { AvailabilityMonth } from '../apis/types'

export function getUnavailableDates(availability: AvailabilityMonth[]): Date[] {
	return availability.flatMap((month) =>
		month.days
			.filter((day) => !day.available)
			.map((day) => new Date(day.calendarDate)),
	)
}