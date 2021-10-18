function Arrow({ text, actionOnClick }) {
  return <div onClick={actionOnClick}>{text}</div>;
}

export default Arrow;
