interface ErrorMessage {
    text?: string;
}
export const ErrorMessage: React.FC<ErrorMessage> = ({
  text = "This field cannot be empty",
}) => {
  return <p className="text-red-500 mt-2">{text}</p>;
};