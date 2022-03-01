export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary";
  icon?: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}
