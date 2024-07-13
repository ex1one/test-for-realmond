import { fakeStoreHttp } from './config'
import { GetUsersParams, GetUsersResult } from './types'

// TODO: Вынести эту переменную
const API = {
	USERS: '/users',
}

export const getUsers = (
	params: Partial<GetUsersParams> = { limit: 20, sort: 'asc' }
) => {
	return fakeStoreHttp.get<GetUsersResult>(API.USERS, {
		params,
	})
}
