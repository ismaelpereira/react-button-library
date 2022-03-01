import { ButtonProps } from "./button";
import { ButtonStyle, TextContainer, Icon } from "./style";
import arrowRight from "../../assets/icons/arrowRight.svg";
import check from "../../assets/icons/check.svg";
import refresh from ".../../assets/icons/refresh.svg";

const Button = ({
  color = "primary",
  disabled,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle disabled={disabled} color={color}>
      <TextContainer>
        Text
        {icon && <Icon>{icon}</Icon>}
      </TextContainer>
    </ButtonStyle>
  );
};

export default Button;
