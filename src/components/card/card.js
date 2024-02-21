export const Card = ({ children, icon, title }) => (
  <div className="card">
    <img src={icon} alt={title} draggable="false" />
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
);