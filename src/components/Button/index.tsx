import { ButtonProps } from "./button";
import { ButtonStyle } from "./style";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowRight.svg";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { ReactComponent as Refresh } from "../../assets/icons/refresh.svg";

const Button = ({ color, disabled, icon, ...props }: ButtonProps) => {
  const icons: { [key: string]: JSX.Element | undefined } = {
    none: undefined,
    "arrow-right": <ArrowRight />,
    check: <Check />,
    refresh: <Refresh />,
  };

  console.log(icon);

  return (
    <ButtonStyle disabled={disabled} color={color} {...props} icon={icon}>
      <div>
        {props.label}
        {icon && <span aria-label="icon">{icons[icon]}</span>}
      </div>
    </ButtonStyle>
  );
};

export default Button;
