/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NewPokemon, maxAdditionalImg, newPokemonData } from './helper';

// accessor: 데이터 모델이 있어서 정렬, 필터링, 그룹화 가능
// display: 데이터 모델이 없어서 보여주는 것만 가능
// group: 데이터 모델이 없고 그룹화하는데 사용. 주로 header나 footer에 사용
// https://tanstack.com/table/v8/docs/guide/column-defs#column-def-types
const columnHelper = createColumnHelper<NewPokemon>();

// https://tanstack.com/table/v8/docs/api/core/cell#rendervalue
const columns = [
  columnHelper.group({
    id: 'summary',
    header: () => <span>요약</span>,
    footer: '요약',
    columns: [
      columnHelper.accessor('number', {
        header: 'No',
        cell: (props) => props.getValue(),
        footer: (props) => (
          <span>
            {props.column.id} 총 합:
            {props.table.getRowModel().rows.reduce((acc, cur) => acc + Number(cur.original.number), 0)}
          </span>
        ),
      }),
      columnHelper.accessor('name', {
        header: '이름',
        cell: (props) => props.getValue(),
        footer: (props) => props.column.id,
      }),
    ],
  }),
  columnHelper.group({
    id: 'detail',
    header: '세부정보',
    footer: '세부정보',
    columns: [
      columnHelper.group({
        header: '모든 이미지',
        footer: '모든 이미지',
        columns: [
          columnHelper.accessor('img', {
            header: '이미지',
            cell: (props) => <CellImage src={props.getValue()} />,
            footer: (props) => props.column.id,
            size: 200,
          }),
          ...new Array(maxAdditionalImg).fill(null).map((_, index) => {
            return columnHelper.accessor(`img${index}`, {
              header: `다른 지역 이미지${index + 1}`,
              cell: (props) => {
                if (props.getValue()) return <CellImage src={props.getValue()} />;
              },
              footer: (props) => props.column.id,
              size: 200,
            });
          }),
        ],
      }),
    ],
  }),
];

export default function ColumnGroupsPage() {
  const [data] = useState(() => newPokemonData);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div css={RootStyle}>
      <h1>header에서 column을 grouping하는 테이블</h1>
      <div>아래 테이블은 header 개수가 정해지지 않은 경우 동적으로 헤더를 생성하는 테이블입니다.</div>
      <br />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ width: header.getSize() }} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
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
      th {
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
  }
`;

const CellImage = styled.img`
  width: 100px;
  height: 100px;
`;
