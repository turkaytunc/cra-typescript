type HeaderProps = {
  projectName?: string;
};

const Header = (props: HeaderProps) => {
  return <div>{props.projectName}</div>;
};

export default Header;
