import Footer from "@/components/footer";
import QuizNavigation from "./quiz/components/quiz-navigation";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between p-4">
      <div className="flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-3 lg:grid-cols-3">
          <main className="col-span-2">{children}</main>
          <QuizNavigation />
        </div>
      </div>
      <Footer />
    </div>
  );
}
