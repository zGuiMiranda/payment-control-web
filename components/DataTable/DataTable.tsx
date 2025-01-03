'use client';

import { useEffect, useState } from 'react';
import { DataTableColumn, DataTable as MantineDataTable } from 'mantine-datatable';

type DataTableProps = {
  itemsPerPage?: number;
  data: { [key: string]: string | number }[];
  columns: DataTableColumn[];
};

const PAGE_SIZES = [5, 10, 15, 20];

export const DataTable = ({ itemsPerPage = 10, data, columns }: DataTableProps) => {
  const [pageSize, setPageSize] = useState<number>(
    PAGE_SIZES.includes(itemsPerPage) ? itemsPerPage : PAGE_SIZES[0]
  );

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);

  const [records, setRecords] = useState(data.slice(0, pageSize));

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(data.slice(from, to));
  }, [page, pageSize]);

  return (
    <MantineDataTable
      withTableBorder
      borderColor="#FFA500"
      totalRecords={data.length}
      rowBorderColor="light-gray"
      styles={{
        table: {
          tableLayout: 'fixed',
        },

        header: {
          backgroundColor: '#FFA500',
          color: 'white',
          fontWeight: 'bold',
        },
      }}
      columns={columns}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
      records={records}
    />
  );
};
