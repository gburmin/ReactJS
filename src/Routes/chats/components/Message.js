import propTypes from "prop-types";

export const Message = (props) => {
  return (
    <div>
      [{props.author}]: {props.text}
    </div>
  );
};

Message.propTypes = {
  text: propTypes.string,
  author: propTypes.string
};
