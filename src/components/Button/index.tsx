import { ButtonProps } from "./button";
import { ButtonStyle, TextContainer } from "./style";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowRight.svg";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { ReactComponent as Refresh } from "../../assets/icons/refresh.svg";

const Button = ({ label, color, disabled, icon, ...props }: ButtonProps) => {
  let iconRenderer: JSX.Element | undefined;

  if (icon === "none") {
    iconRenderer = undefined;
  }

  if (icon === "arrow-right") {
    iconRenderer = <ArrowRight />;
  }

  if (icon === "check") {
    iconRenderer = <Check />;
  }

  if (icon === "refresh") {
    iconRenderer = <Refresh />;
  }

  return (
    <ButtonStyle disabled={disabled} color={color} label={label}>
      <TextContainer>
        Text
        {icon && <span>{iconRenderer}</span>}
      </TextContainer>
    </ButtonStyle>
  );
};

export default Button;
