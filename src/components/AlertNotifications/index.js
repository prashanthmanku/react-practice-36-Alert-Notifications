import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="icon  success-color" />
      <div className="content-container">
        <h1 className="status-heading  success-color">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <RiErrorWarningFill className="icon error-color" />
      <div className="content-container">
        <h1 className="status-heading error-color">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <MdWarning className="icon warning-color" />
      <div className="content-container">
        <h1 className="status-heading warning-color">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfo = () => (
    <Notification>
      <MdInfo className="icon info-color" />
      <div className="content-container">
        <h1 className="status-heading info-color">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="alert-notifications-container">
      <h1 className="main-heading">Alert Notifications</h1>
      {renderSuccess()}
      {renderError()}
      {renderWarning()}
      {renderInfo()}
    </div>
  )
}
export default AlertNotifications
