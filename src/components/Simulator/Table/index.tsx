import React from 'react';

interface TableProps {
  value: number;
}

const Table: React.FC<TableProps> = ({ value }) => {
  const tableData = [
    { parcel: 1, percentage: 0.06, total: 1000 },
    { parcel: 2, percentage: 0.08, total: 3000 },
    { parcel: 3, percentage: 0.1, total: 6000 },
    { parcel: 4, percentage: 0.12, total: 4800 },
    { parcel: 5, percentage: 0.14, total: 9000 },
    { parcel: 6, percentage: 0.15, total: 15000 },
    { parcel: 7, percentage: 0.16, total: 15400 },
    { parcel: 8, percentage: 0.17, total: 13600 },
    { parcel: 9, percentage: 0.18, total: 27000 },
    { parcel: 10, percentage: 0.19, total: 28000 },
    { parcel: 11, percentage: 0.2, total: 28000 },
    { parcel: 12, percentage: 0.21, total: 28000 },
  ];

  return (
    <div className='w-full'>
      <table className='w-full table-auto'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='px-4 py-2'>Parcelas</th>
            <th className='px-4 py-2'>Valor das Parcelas</th>
            <th className='px-4 py-2'>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className='bg-white'>
              <td className='px-4 py-2'>{data.parcel}x</td>
              <td className='px-4 py-2 text-xs whitespace-nowrap'>
                R$ {' '}
                {((value * (1 + data.percentage)) / data.parcel).toFixed(2)}
              </td>
              <td className='px-4 py-2 text-xs whitespace-nowrap'>R$ {((value * (1 + data.percentage))).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
