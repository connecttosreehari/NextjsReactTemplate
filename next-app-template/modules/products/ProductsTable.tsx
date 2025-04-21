import { useCallback, useState } from "react";
import { useGetProductList } from "@api/products/hooks";
import { Box, Field, Input, Stack, Table } from "@chakra-ui/react";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import _ from "lodash";

type Filters = {
  search?: string;
};

type Product = {
  name: string;
  description: string;
  price: number;
};

const ProductsTable = () => {
  const [filters, setFilters] = useState<Filters>();
  const products = useGetProductList({
    search: filters?.search,
  });

  // @ts-expect-warn: Ignore useCallback
  const handleSearch = useCallback(
    _.debounce((value: string) => setFilters({ ...filters, search: value }), 300),
    []
  );

  const columnHelper = createColumnHelper<Product>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Product",
    }),
    columnHelper.accessor("description", {
      cell: (info) => info.getValue(),
      header: "Description",
    }),
    columnHelper.accessor("price", {
      cell: (info) => info.getValue(),
      header: "Price",
    }),
  ];

  const table = useReactTable({
    data: products.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Stack>
      <Box>
        <Field.Root>
          <Field.Label>Search</Field.Label>
          <Input placeholder="Search by name or email" onChange={(e) => handleSearch(e.target.value)} />
        </Field.Root>
      </Box>
      <Table.Root>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
};

export default ProductsTable;
