interface InfoStepProps {
  text: string;
  title: string;
}
export const InfoStep: React.FC<InfoStepProps> = ({ text, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1>{title}</h1>
      <p className="text-sm text-labelInputColor tracking-wide">{text}</p>
    </div>
  );
};
