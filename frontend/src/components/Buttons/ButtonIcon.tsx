import "./styles.css";
import { ReactComponent as ImageSeta } from "assets/images/Seta.svg";
type btnProps = {
  value: string;
};
export const ButtonIcon = ({ value }: btnProps) => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>{value}</h6>
      </button>

      <div className="btn-seta">
        <ImageSeta />
      </div>
    </div>
  );
};
