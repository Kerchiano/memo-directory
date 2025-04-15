import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@heroui/react";
import { Meme } from "@/types";

interface Props {
  memes: Meme[];
  onEdit: (meme: Meme) => void;
}

export default function MemeTable({ memes, onEdit }: Props) {
  return (
    <Table aria-label="Meme Table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Title</TableColumn>
        <TableColumn>Image</TableColumn>
        <TableColumn>Like</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        {memes.map((meme) => (
          <TableRow key={meme.id}>
            <TableCell>{meme.id}</TableCell>
            <TableCell className="max-w-[150px] truncate">
              {meme.title}
            </TableCell>
            <TableCell className="max-w-[350px] truncate">
              {meme.image}
            </TableCell>
            <TableCell>{meme.likes}</TableCell>
            <TableCell>
              <Button onPress={() => onEdit(meme)}>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
