export async function getQuestions() {
  const questionIds = [
    "AreaUnderTheCurve_901",
    "BinomialTheorem_901",
    "DifferentialCalculus2_901",
  ];

  const questionDetails = [];

  for (const id of questionIds) {
    const response = await fetch(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${id}`
    );
    const data = await response.json();
    questionDetails.push(data[0]);
  }

  return questionDetails;
}
