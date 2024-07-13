export interface User {
	id: string
	email: string
	username: string
	password: string
	name: { firstname: string; lastname: string }
	phone: string
}

export interface Address {
	geolocation: GeoLocation
	city: string
	street: string
	number: number
	zipcode: string
}

export interface GeoLocation {
	lat: string
	long: string
}

export interface GetUsersParams {
	limit: number
	sort: 'asc' | 'desc'
}

export type GetUsersResult = User[]
