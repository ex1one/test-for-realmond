import { Button, Center, Stack, Table, Title } from '@mantine/core'
import { useUnit } from 'effector-react'
import {
	$fetchingUsers,
	$pagination,
	$users,
	showMoreClicked,
	USERS_LIMIT,
} from '~/pages/home/model'
import { User } from '~/shared/api/fakestore/http/types'

export function HomePage() {
	const [users, pagination, fetchingUsers] = useUnit([
		$users,
		$pagination,
		$fetchingUsers,
	])

	return (
		<Stack p={16}>
			<Title order={1}>Пользователи</Title>
			<UsersTable users={users} />
			{users.length > 0 ? (
				<Center>
					<Button
						disabled={pagination.limit >= USERS_LIMIT}
						loading={fetchingUsers}
						onClick={() => showMoreClicked()}
					>
						Показать ещё
					</Button>
				</Center>
			) : null}
		</Stack>
	)
}

interface UsersTableProps {
	users: User[]
}

// Это выносится в отдельную сущность
function UsersTable({ users }: UsersTableProps) {
	return (
		<Table>
			<Table.Thead>
				<Table.Tr>
					<Table.Th>Имя</Table.Th>
					<Table.Th>Никнейм</Table.Th>
					<Table.Th>Телефон</Table.Th>
					<Table.Th>Email</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				{users.length > 0
					? users.map(user => (
							<Table.Tr key={user.id}>
								<Table.Td>{`${user.name.firstname} ${user.name.lastname}`}</Table.Td>
								<Table.Td>{user.username}</Table.Td>
								<Table.Td>{user.phone}</Table.Td>
								<Table.Td>{user.email}</Table.Td>
							</Table.Tr>
					  ))
					: 'Пусто'}
			</Table.Tbody>
		</Table>
	)
}
