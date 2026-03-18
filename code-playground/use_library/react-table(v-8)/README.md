# react-table

- 새로운 버전의 react-table을 사용하기 위한 연습용 프로젝트입니다.(react-table v7 deprecated)

## 사용방법

아래 파일을 복사해서 pages/~~/page.tsx를 만들어주세요.
컴포넌트 이름을 수정하고 해당 기능에 맞게 코드를 수정하면 됩니다.
그리고 pages/index.tsx에서 해당 컴포넌트와 url을 연결해주세요.

```
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

export default function WhatPage() {
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
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                // 여기서 size 지정
                <th key={header.id} style={{ width: header.getSize() }}>
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
                <th key={header.id}>
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
    }
  }
`;

const CellImage = styled.img`
  width: 100px;
  height: 100px;
`;
```

---

````

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
````

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
