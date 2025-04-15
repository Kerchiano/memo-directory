import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-20 h-20 bg-primary rounded-full animate-bounce shadow-xl" />
        <p className="text-xl text-foreground font-medium">Главная страница</p>
      </section>
    </DefaultLayout>
  );
}
