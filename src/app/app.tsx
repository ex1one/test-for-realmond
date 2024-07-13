import { RouterProvider } from 'atomic-router-react'
import { MantineProvider } from '@mantine/core'

import { router } from '~/shared/routing'
import { Pages } from '~/pages'

export default function App() {
	return (
		<MantineProvider>
			<RouterProvider router={router}>
				<Pages />
			</RouterProvider>
		</MantineProvider>
	)
}
