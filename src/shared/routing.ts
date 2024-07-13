import {
	createRoute,
	createRouterControls,
	createHistoryRouter,
} from 'atomic-router'
import { sample } from 'effector'
import { createBrowserHistory } from 'history'
import { appStarted } from '~/shared/api/config/init'

export const routes = {
	home: createRoute(),
}

export const controls = createRouterControls()

export const router = createHistoryRouter({
	routes: [{ path: '/', route: routes.home }],
	controls,
})

sample({
	clock: appStarted,
	fn: () => createBrowserHistory(),
	target: router.setHistory,
})
