export const Result = props => {
  const { result } = props;
  return (
    <div>
      <p className="resultValue">{result}</p>
    </div>
  );
};
