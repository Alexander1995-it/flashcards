import { Meta } from '@storybook/react'

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from './'

export default {
  component: Table,
  title: 'Components/Table',
} as Meta<typeof Table>

export const Default = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Название</TableHeadCell>
            <TableHeadCell align={'center'}>Описание</TableHeadCell>
            <TableHeadCell>Ссылка</TableHeadCell>
            <TableHeadCell>Тип</TableHeadCell>
            <TableHeadCell>Вид</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{'Text'}</TableCell>
            <TableCell>{'Text'}</TableCell>
            <TableCell>{'Text'}</TableCell>
            <TableCell>{'Text'}</TableCell>
            <TableCell>{'Text'}</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

export const WithMapMethod = {
  args: {
    children: <>Hello</>,
  },
}

export const Empty = {
  render: () => <div>Hello 2</div>,
}
