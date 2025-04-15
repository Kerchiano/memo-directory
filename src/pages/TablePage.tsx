import { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/default";
import MemeTable from "@/components/MemeTable";
import MemeSkeleton from "@/components/MemeSkeleton";
import MemeEditModal from "@/components/MemeEditModal";
import { Meme } from "@/types";
import { useDisclosure } from "@heroui/react";

export default function TablePage() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedMemes = localStorage.getItem("memes");
    if (storedMemes) {
      setMemes(JSON.parse(storedMemes));
      setIsLoading(false);
    } else {
      fetch("http://localhost:5000/memes")
        .then((res) => res.json())
        .then((data) => {
          const memesWithLikes = data.map((meme: Meme) => ({
            ...meme,
            likes: Math.floor(Math.random() * 100),
          }));
          setMemes(memesWithLikes);
          localStorage.setItem("memes", JSON.stringify(memesWithLikes));
          setIsLoading(false);
        });
    }
  }, []);

  const saveMemes = (updatedMemes: Meme[]) => {
    setMemes(updatedMemes);
    localStorage.setItem("memes", JSON.stringify(updatedMemes));
  };

  const handleEdit = (meme: Meme) => {
    setSelectedMeme(meme);
    onOpen();
  };

  const handleSave = () => {
    if (selectedMeme) {
      const likesValue = Number(selectedMeme.likes);
      const updatedMeme = {
        ...selectedMeme,
        likes: isNaN(likesValue) ? Math.floor(Math.random() * 100) : likesValue,
      };
      const updatedMemes = memes.map((meme) =>
        meme.id === updatedMeme.id ? updatedMeme : meme
      );
      saveMemes(updatedMemes);
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-4xl font-bold">Таблиця мемів</h1>
        </div>

        <div className="w-full max-w-6xl mt-6 px-4">
          {isLoading ? (
            <MemeSkeleton />
          ) : (
            <MemeTable memes={memes} onEdit={handleEdit} />
          )}
        </div>
      </section>

      <MemeEditModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        meme={selectedMeme}
        onChange={setSelectedMeme}
        onSave={handleSave}
      />
    </DefaultLayout>
  );
}