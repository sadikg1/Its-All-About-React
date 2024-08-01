const AppList = ({ appl, cardStyle }) => {
  return (
    <div className="card" style={cardStyle}>
      <div className="card-header">Featured Apps</div>
      <ul className="list-group list-group-flush">
        {appl.map((app) => (
          <li key={app} className="list-group-item">
            {app}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AppList;
