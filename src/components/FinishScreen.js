function FinishScreen({ points, maxPoints, highscore,dispatch }) {
  const percent = Math.ceil((points / maxPoints) * 100);
  let emoji;
  if (points === 100) emoji = "🥇";
  if (points >= 80 && points < 100) emoji = "🎉";
  if (points >= 50 && points < 80) emoji = "😊";
  if (points > 0 && points < 50) emoji = "🤔";
  if (points === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPoints} points (
        {percent}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
