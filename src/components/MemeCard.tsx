import { Meme } from "@/types";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function MemeCard({ title, image, likes }: Meme) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large max-w-[230px] overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </h4>
        <p className="text-small text-default-500">Лайків: {likes}</p>
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm underline mt-1"
        >
          Відкрити зображення
        </a>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={title}
          className="object-cover rounded-xl w-full h-[200px]"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
