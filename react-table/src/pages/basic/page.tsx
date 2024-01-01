import { useState } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { css } from '@emotion/react';
import { Pokemon, pokemonData } from '../../__mock__';
import styled from '@emotion/styled';

// accessor: 데이터 모델이 있어서 정렬, 필터링, 그룹화 가능
// display: 데이터 모델이 없어서 보여주는 것만 가능
// group: 데이터 모델이 없고 그룹화하는데 사용. 주로 header나 footer에 사용
// https://tanstack.com/table/v8/docs/guide/column-defs#column-def-types
const columnHelper = createColumnHelper<Pokemon>();

// cell
// getValue vs renderValue
// 기본적으로 동일한데 renderValue에서 value가 없으면 renderFallbackValue를 return 한다.
// https://tanstack.com/table/v8/docs/api/core/cell#rendervalue
const columns = [
  columnHelper.accessor('number', {
    header: 'No',
    cell: (props) => props.getValue(),
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor('name', {
    header: '이름',
    cell: (props) => props.getValue(),
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor('img', {
    header: '이미지',
    cell: (props) => <CellImage src={props.getValue()} />,
    footer: (props) => props.column.id,
    size: 200,
  }),
];

export default function BasicPage() {
  const [data] = useState(() => [...pokemonData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div css={RootStyle}>
      <h1>기본 테이블</h1>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            // console.log('headerGroup', headerGroup);
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  // console.log('header', header);
                  return (
                    // 여기서 size 지정
                    <th key={header.id} style={{ width: header.getSize() }}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            // console.log('row', row);
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => {
            // console.log('footerGroup', footerGroup);
            return (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => {
                  // console.log('footer header', header);
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </div>
  );
}

const RootStyle = css`
  table {
    border-spacing: 0;
    thead {
      th {
        padding: 0 10px;
        height: 40px;
        border-top: 1px solid gray;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
        background: aliceblue;
        color: black;
        font-weight: bold;
        &:first-child {
          border-left: 1px solid gray;
        }
      }
    }
    tbody {
      td {
        padding: 0 10px;
        height: 120px;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
        &:first-child {
          border-left: 1px solid gray;
        }
      }
    }
    tfoot {
      color: gray;
    }
  }
`;

const CellImage = styled.img`
  width: 100px;
  height: 100px;
`;
