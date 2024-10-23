/* eslint-disable jsx-a11y/anchor-is-valid */
import "app/Packs/css/app.css";
import logo from "app/Packs/assets/images/logo-small.png";

const Protected = () => {
  return (
    <div id="wrapper">
      <aside id="sidebar">
        <div className="sd-header brand">
          <img src={logo} alt="The office logo brand" />
        </div>

        <div className="app-links-container">
          <p className="mb-3">Apps</p>

          <nav id="custom-nav">
            <ul>
              <li>
                <a className="flex align gap-md" href="#">
                  <i className="ri-bank-fill" />
                  <span>Budget</span>
                </a>
              </li>
              <li>
                <a className="flex align gap-md" href="#">
                  <i className="ri-building-fill" />
                  <span>Facilities & Logistics</span>
                </a>
              </li>
              <li>
                <a className="flex align gap-md" href="#">
                  <i className="ri-service-fill" />
                  <span>Staff Services</span>
                </a>
              </li>
              <li>
                <a className="flex align gap-md" href="#">
                  <i className="ri-file-chart-fill" />
                  <span>Reports</span>
                </a>
              </li>
              <li>
                <a className="flex align gap-md" href="#">
                  <i className="ri-wallet-2-fill" />
                  <span>Payments</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main id="content">
        <div className="sd-header top-header">Body</div>
      </main>
    </div>
  );
};

export default Protected;
