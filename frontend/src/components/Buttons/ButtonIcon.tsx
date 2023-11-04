import "./styles.css";
type btnProps = {
  value: string;
};
export const ButtonIcon = ({ value }: btnProps) => {
  return (
    <button className="btn btn-primary btn-icon">
      <span>{value}</span>
    </button>
  );
};
