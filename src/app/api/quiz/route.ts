"use server";

export const GET = async (req: Request) => {
  const res = await fetch(
    "https://www.opentdb.com/api.php?amount=10&type=multiple",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch quiz data");

  const data = await res.json();

  return Response.json(
    {
      data: data.results.map((result: any) => ({
        question: result.question,
        answer: [result.correct_answer, ...result.incorrect_answers].sort(),
        correct_answer: result.correct_answer,
      })),
    },
    {
      status: 200,
    }
  );
};
