export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}
