import { useState } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Pokemon, pokemonData } from '../../__mock__';
import styled from '@emotion/styled';
import { Table } from './table';
import { css } from '@emotion/react';

// accessor: 데이터 모델이 있어서 정렬, 필터링, 그룹화 가능
// display: 데이터 모델이 없어서 보여주는 것만 가능
// group: 데이터 모델이 없고 그룹화하는데 사용. 주로 header나 footer에 사용
// https://tanstack.com/table/v8/docs/guide/column-defs#column-def-types
const columnHelper = createColumnHelper<Pokemon>();

const columns = [
  columnHelper.accessor('number', {
    header: () => <Table.Cell.Number>No</Table.Cell.Number>,
    cell: (props) => <Table.Cell.Number>{props.getValue()}</Table.Cell.Number>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor('name', {
    header: () => <Table.Cell.Text>이름</Table.Cell.Text>,
    cell: (props) => <Table.Cell.Text>{props.getValue()}</Table.Cell.Text>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor('img', {
    header: () => <Table.Cell.Image>이미지</Table.Cell.Image>,
    cell: (props) => (
      <Table.Cell.Image>
        <CellImage src={props.getValue()} />
      </Table.Cell.Image>
    ),
    footer: (props) => props.column.id,
    size: 200,
  }),
];

export default function AlignPage() {
  const [data] = useState(() => [...pokemonData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h1>align 테이블</h1>
      <div>테이블을 Composition Pattern으로 정의하고 react-table 훅으로 데이터를 제어</div>
      <Table>
        <Table.THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                // 여기서 size 지정
                <Table.Th
                  key={header.id}
                  css={css`
                    width: ${header.getSize()}px;
                  `}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.THead>
        <Table.TBody>
          {table.getRowModel().rows.map((row) => (
            <Table.Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.TBody>
        <Table.TFoot>
          {table.getFooterGroups().map((footerGroup) => (
            <Table.Tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <Table.Th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.TFoot>
      </Table>
    </div>
  );
}

const CellImage = styled.img`
  width: 100px;
  height: 100px;
`;
