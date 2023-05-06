/* eslint-disable react/prop-types */

const Title = ({ text }) => {
  return (
    <div className="title">
      <h2>{text || "default title"}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
