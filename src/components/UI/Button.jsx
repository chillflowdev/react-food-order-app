export default function Button({ children, textOnly, className, ...props }) {
  // 버튼의 스타일을 다양화 하고 싶을 경우에
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return <button className={cssClasses} {...props}>{children}</button>;
}
