import { useState } from 'react';
import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { css } from '@emotion/react';
import { Pokemon, pokemonData } from '../../__mock__';
import styled from '@emotion/styled';
import { SwitchCase } from '../../components/SwitchCase';

const newPokemonData = pokemonData.map((pokemon) => ({ ...pokemon, img2: pokemon.img }));

// accessor: 데이터 모델이 있어서 정렬, 필터링, 그룹화 가능
// display: 데이터 모델이 없어서 보여주는 것만 가능
// group: 데이터 모델이 없고 그룹화하는데 사용. 주로 header나 footer에 사용
// https://tanstack.com/table/v8/docs/guide/column-defs#column-def-types
const columnHelper = createColumnHelper<Pokemon>();

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
    enableSorting: false,
  }),
];

export default function SortingPage() {
  const [data] = useState(() => newPokemonData);

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <div css={RootStyle}>
      <h1>정렬 테이블</h1>
      <div>
        만약 백엔드 api를 이용해서 정렬하고 싶다면
        <br />
        onClick에서 header.column.getToggleSortingHandler() 대신 header.column.getIsSorted()를 이용해서
        <br />
        상태를 변경하고 상태의 변경에 따라 api를 호출하면 됩니다.
      </div>
      <br />
      <div css={{ display: 'flex', gap: '100px' }}>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} style={{ width: header.getSize() }} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        onClick={header.column.getToggleSortingHandler()}
                        css={css`
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          height: 100%;
                          ${header.column.getCanSort() &&
                          css`
                            cursor: pointer;
                          `}
                        `}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && (
                          <SwitchCase
                            value={header.column.getIsSorted() || 'neutral'}
                            caseBy={{
                              desc: <span>⬇️</span>,
                              asc: <span>⬆️</span>,
                              neutral: <span>↕️</span>,
                            }}
                          />
                        )}
                      </div>
                    )}
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
                  <th key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <pre>{JSON.stringify(sorting, null, 2)}</pre>
      </div>
    </div>
  );
}

const RootStyle = css`
  table {
    border-spacing: 0;
    thead {
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
