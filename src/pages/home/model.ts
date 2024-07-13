import { createEffect, createEvent, createStore, sample } from 'effector'

import { routes } from '~/shared/routing'
import { appStarted } from '~/shared/api/config/init'
import { getUsers } from '~/shared/api/fakestore/http'
import { GetUsersParams, User } from '~/shared/api/fakestore/http/types'

// Ограничение на показ пользователей, т.к апишка не возвращает информацию о пагинации
export const USERS_LIMIT = 40

export const currentRoute = routes.home

export const getUsersFx = createEffect(async (params: GetUsersParams) => {
	const { data } = await getUsers(params)

	return data
})
export const $fetchingUsers = getUsersFx.pending

export const paginationChanged = createEvent<Partial<GetUsersParams>>()
export const showMoreClicked = createEvent()

export const $users = createStore<User[]>([])
export const $pagination = createStore<GetUsersParams>({
	limit: 20,
	sort: 'asc',
})

$users
	.on(getUsersFx.doneData, (_, payload) => payload)
	.on(getUsersFx.failData, (state, error) => {
		console.error(error)
		return state
	})

$pagination.on(paginationChanged, (state, payload) => {
	return { ...state, ...payload }
})

// START
sample({
	clock: appStarted,
	source: $pagination,
	target: getUsersFx,
})

sample({
	clock: $pagination,
	target: getUsersFx,
})

sample({
	clock: showMoreClicked,
	source: $pagination,
	// Сервер не возращает дату о пагинации
	filter: state => (state.limit >= USERS_LIMIT ? false : true),
	fn: state => {
		return { ...state, limit: state.limit + 20 }
	},
	target: $pagination,
})
