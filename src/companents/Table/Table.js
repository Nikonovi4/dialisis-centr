import patintsList from "../../utils/patienstList";
import { useTable } from 'react-table';

import React from "react";
import { useMemo } from "react";
import { COLUMNS } from "../../utils/Columns";

// import 'react-table/react-table.css'

const Table = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => patintsList, [])

  const tableInstance = useTable({
    columns,
    data
})
const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow} = tableInstance
console.log(tableInstance)

  return (
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}> 
                          {column.render('Header')}
                       </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                 prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                       {row.cells.map((cell) => {
                         return <td {...cell.getCellProps()}>
                          {cell.render('Cell')}</td>
                            })}
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
  
    // <table>
    //   <thead>
    //     <tr>
    //       <th></th>
    //       <th>Смена 1</th>
    //       <th>Смена 2</th>
    //       <th>Смена 3</th>
    //       <th>Смена 4</th>
    //     </tr>
    //   </thead>
    //   <tr>
    //     <td className="table__verical">Место 1</td>
    //     <td>Иванов <button>Пришел</button></td>
    //     <td>Петоров</td>
    //     <td>Сидоров</td>
    //     <td>Васечкин</td>
    //   </tr>
    //   <tr>
    //     <td className="table__verical">Место 2</td>
    //     <td>Бетмен</td>
    //     <td>Аквамен</td>
    //     <td>Флеш</td>
    //     <td>Галь Гадот</td>
    //   </tr>
    //   <tr>
    //     <td className="table__verical">Место 3</td>
    //     <td>Тинки-Винки</td>
    //     <td>Ля-ля</td>
    //     <td>Бо-бо</td>
    //     <td>Тиранозавр</td>
    //   </tr>
    // </table>
  );
};

export default Table;
