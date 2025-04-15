import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Skeleton,
  } from "@heroui/react";
  
  export default function MemeSkeleton() {
    return (
      <Table aria-label="Loading Table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Like</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {[...Array(10)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-6 w-6 rounded-md bg-default-200" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-[150px] rounded-md bg-default-200" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-[450px] rounded-md bg-default-200" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-10 rounded-md bg-default-200" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-16 rounded-md bg-default-300" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }