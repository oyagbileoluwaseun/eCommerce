import React from 'react';
import picture from '../../assets/images/photo.JPG';
import Profile from '../Profile/Profile';
import "./Profile.css";

function Dashboard() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="navbar-expand-sm navbar-light pb-4 pt-4 col-xl-3 col-lg-4 col-md-4 col-sm-10 col-xs-4">
            <img className="image mb-2 shadow" src={picture} alt="app" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="nav flex-column nav-pills" id="navbarNav" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
              <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">User Profile</button>
              <button className="nav-link" id="v-pills-wallet-tab" data-bs-toggle="pill" data-bs-target="#v-pills-wallet" type="button" role="tab" aria-controls="v-pills-wallet" aria-selected="false">Wallet</button>
              <button className="nav-link" id="v-pills-app-tab" data-bs-toggle="pill" data-bs-target="#v-pills-app" type="button" role="tab" aria-controls="v-pills-app" aria-selected="false">App Setup</button>
              <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
              <button className="nav-link" id="v-pills-support-tab" data-bs-toggle="pill" data-bs-target="#v-pills-support" type="button" role="tab" aria-controls="v-pills-support" aria-selected="false">Contact Support</button>
              <button className="nav-link categories fs-6 fw-bold" id="v-pills-categories-tab" data-bs-toggle="pill" data-bs-target="#v-pills-categories" type="button" role="tab" aria-controls="v-pills-categories" aria-selected="false">View all categories  <i class="fa fa-chevron-right"/></button>
            </div>
          </div>  
          <div className="tab-content border-start col-xl-9 col-lg-8 col-md-8 col-sm-11 col-xs-7" id="v-pills-tabContent">
            <div className="tab-pane fade show active act" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <p className="mt-3 fw-bold">Click on the User Profile Tab to see User details</p>
              </div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <Profile />
              </div>
              <div className="tab-pane fade" id="v-pills-wallet" role="tabpanel" aria-labelledby="v-pills-wallet-tab">
                <p className="pt-3">Wallet Coming soon...</p> 
              </div>
              <div className="tab-pane fade" id="v-pills-app" role="tabpanel" aria-labelledby="v-pills-app-tab">
                App Coming soon...
              </div>
              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                Settings Coming soon...
              </div>
              <div className="tab-pane fade" id="v-pills-support" role="tabpanel" aria-labelledby="v-pills-support-tab">
                Support Coming soon...
              </div>
              <div className="tab-pane fade" id="v-pills-categories" role="tabpanel" aria-labelledby="v-pills-categories-tab">
                Categories
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
