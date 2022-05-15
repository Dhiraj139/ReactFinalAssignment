import "./Notifications.css";
import React, { Component } from "react";

export default class Notifications extends Component {
  state = {
    chartlinepage:
      localStorage.getItem("accountdata") === null
        ? []
        : JSON.parse(localStorage.getItem("accountdata")),
  };

  render() {
    const notificationArr = this.state.chartlinepage["dasbhoardPage"][
      "notifications"
    ];
    const mapNotiArr = notificationArr.map((item) => {
      return (
        <>
        <div className="media tm-notification-item">
          <div className="tm-gray-circle">
            <img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-01.jpg" alt="Avatar Image" className="rounded-circle" />
          </div>
          <div className="media-body">
            <p className="mb-2">{item.message}</p>
            <span className="tm-small tm-text-color-secondary">
              6h ago.
            </span>
          </div>
        </div>
        <div className="media tm-notification-item">
          <div className="tm-gray-circle">
            <img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-02.jpg" alt="Avatar Image" className="rounded-circle" />
          </div>
          <div className="media-body">
            <p className="mb-2">Oliver Too and 6 others sent you existing product updates. Read more reports.</p>
            <span className="tm-small tm-text-color-secondary">
            6h ago.
            </span>
          </div>
        </div>
        <div className="media tm-notification-item">
          <div className="tm-gray-circle">
            <img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-03.jpg" alt="Avatar Image" className="rounded-circle" />
          </div>
          <div className="media-body">
            <p className="mb-2">Victoria and 6 others sent you order updates. Read order information.</p>
            <span className="tm-small tm-text-color-secondary">
            6h ago.
            </span>
          </div>
        </div>
        </>
      );
    });
    return (
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
        <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
          <h2 className="tm-block-title">Notification List</h2>
          <div className="tm-notification-items">{mapNotiArr}</div>
        </div>
      </div>
    );
  }
}
