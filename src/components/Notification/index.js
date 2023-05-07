import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="children-container"> {children}</div>
      <GrFormClose className="icon-" />
    </div>
  )
}
export default Notification
