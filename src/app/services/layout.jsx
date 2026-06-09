export default function ServicesLayout({ children }) {
  return (
    <section className="service-layout">
      <div className="service-container">
        {children}
      </div>
    </section>
  );
}