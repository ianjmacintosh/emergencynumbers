import "./VisuallyHidden.css";

function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return <span className="visually-hidden">{children}</span>;
}

export default VisuallyHidden;
