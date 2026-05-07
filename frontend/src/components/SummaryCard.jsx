import "../styles/summaryCard.css";

function SummaryCard({ title, value, icon: Icon }) {
  return (
    <div className="summary-card">
      <div className="summary-card-icon">
        <Icon size={22} />
      </div>

      <div>
        <strong>{value}</strong>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default SummaryCard;