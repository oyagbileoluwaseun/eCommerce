
import React, { useState, useEffect } from 'react';

function Profile() {
  const [data, setData] = useState();
  useEffect(async()=>{
    const response = await fetch(`https://indapi.kumba.io/webdev/assignment`);
    const json = await response.json();
    setData(json);
  },[]);
  return (
    <div className="profile-page">
    {data && (
      <div>
        <div>
          <div className="container mt-4">
            <h4 className="fw-bold border-bottom">User Details</h4>
            <div><span className="text-primary fw-bold">USER ID:</span> {data.user.id} </div>
            <div><span className="text-primary fw-bold">Name:</span> {data.user.name} </div>
            <div><span className="text-primary fw-bold">Address:</span> {data.user.address} </div>
            <div><span className="text-primary fw-bold">Phone:</span> {data.user.phone} </div><br/>
            <h4 className="fw-bold border-bottom">Other Details</h4>
            <div><span className="text-primary fw-bold">Likes:</span>
              <ul>
                {data.user.likes.map(like=><li>{like}</li>)}
              </ul>
            </div>
            <div><span className="text-primary fw-bold">Dislikes:</span>
              <ul>
                {data.user.dislikes.map(dislike=><li>{dislike}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
}

export default Profile;
