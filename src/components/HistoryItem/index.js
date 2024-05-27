import './index.css'

const HistoryItem = props => {
  const {eachHistoryItem, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryItem

  const deleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="text-logo-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <div className="title-url-conatiner">
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button
          className="delete-logo"
          type="button"
          data-testid="delete"
          onClick={deleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
