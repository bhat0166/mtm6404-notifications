import React, { useState } from "react";
import notificationsData from "./notifications";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };
  const clearAllNotifications = () => {
    setNotifications([]);
  };
  return (
    <div className="app">
      <h1>Notifications</h1>
      <p>Total Notifications: {notifications.length}</p>
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <h2>{notification.name}</h2>
            <p>{notification.message}</p>
            <button onClick={() => clearNotification(notification.id)}>
              Clear
            </button>
          </div>
        ))}
      </div>
      {notifications.length > 0 && (
        <button className="clear-all-button" onClick={clearAllNotifications}>
          Clear All Notifications!
        </button>
      )}
    </div>
  );
}
export default App;
