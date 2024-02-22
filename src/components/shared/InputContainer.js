import { TextAreaInput } from "./TextAreaInput";

export const InputContainer = () => {
  return (
    <div className="message">
      <div className="message-container">
        <button className="message-attatch-button">
          <img src="/images/paper-clip-o.png"></img>
        </button>

        <TextAreaInput />

        <button className="message-submit-button" type="submit">
          <img src="/images/paper-plane-o.png"></img>
        </button>
      </div>
    </div>
  );
};
