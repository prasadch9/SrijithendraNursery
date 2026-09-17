import useReveal from "../hooks/useReveal";

export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`section-title ${center ? "section-title--center" : ""} ${visible ? "reveal" : "reveal--hidden"}`}
    >
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
      <span className="section-title__divider" />
    </div>
  );
}
