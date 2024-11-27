import React from "react";

const Dashboard = ({ users }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Your Access Dashboard</h1>
      <div className="card">
        <h3>User Summary</h3>
        {users.length === 0 ? (
          <p>No users found! Navigate to the User Management page to get started.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Assigned Role</th>
                <th>Permissions</th>
                <th>Account Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role || "No Role Assigned"}</td>
                  <td>
                    <ul>
                      {user.permissions.map((perm, idx) => (
                        <li key={idx}>{perm}</li>
                      ))}
                    </ul>
                  </td>
                  <td style={{ color: user.status === "active" ? "green" : "red" }}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
