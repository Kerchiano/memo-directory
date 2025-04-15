import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";
import MemeCard from "@/components/MemeCard";
import CardSkeleton from "@/components/CardSkeleton";
import { Meme } from "@/types";
import db from "@/data/db.json";

export default function ListPage() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedMemes = localStorage.getItem("memes");
    if (storedMemes) {
      setMemes(JSON.parse(storedMemes));
    } else {
      const memesWithLikes = db.memes.map((meme) => ({
        ...meme,
        likes: Math.floor(Math.random() * 100),
      }));
      setMemes(memesWithLikes);
      localStorage.setItem("memes", JSON.stringify(memesWithLikes));
    }
    setIsLoading(false);
  }, []);

  const skeletons = Array.from({ length: 10 });

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="text-3xl font-bold mb-6">Список Мемів</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading
            ? skeletons.map((_, index) => <CardSkeleton key={index} />)
            : memes?.map((meme) => <MemeCard key={meme.id} {...meme} />)}
        </div>
      </section>
    </DefaultLayout>
  );
}
