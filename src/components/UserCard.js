import React from "react";

const UserCard = ({ user, onEdit, onDelete, onToggle }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>
        <strong>Role:</strong> {user.role || "Unassigned"}
      </p>
      <p>
        <strong>Permissions:</strong> {user.permissions.join(", ") || "None"}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span style={{ color: user.active ? "green" : "red" }}>
          {user.active ? "Active" : "Inactive"}
        </span>
      </p>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => onToggle(user.id)}>
          {user.active ? "Disable Access" : "Enable Access"}
        </button>
        <button onClick={() => onEdit(user.id, { ...user, name: "Edited User" })}>
          Modify Details
        </button>
        <button onClick={() => onDelete(user.id)} style={{ backgroundColor: "crimson" }}>
          Remove User
        </button>
      </div>
    </div>
  );
};

export default UserCard;
