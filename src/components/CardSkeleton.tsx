import { Card, Skeleton } from "@heroui/react";

export default function CardSkeleton() {
  return (
    <Card className="min-w-[290px] space-y-5 p-4" radius="lg">
      <div className="space-y-3 mt-3">
        <Skeleton className="w-9/12 rounded-lg">
          <div className="h-4 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-1/4 rounded-lg">
          <div className="h-3 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-[200px] rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
  );
}
