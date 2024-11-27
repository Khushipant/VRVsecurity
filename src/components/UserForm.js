import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [permissions, setPermissions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role) {
      alert("Name and Role are mandatory!");
      return;
    }
    onSubmit({ name, role, permissions: permissions.split(",").map((perm) => perm.trim()), active: true });
    setName("");
    setRole("");
    setPermissions("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Role (e.g., Admin, Viewer)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Permissions (comma-separated)"
        value={permissions}
        onChange={(e) => setPermissions(e.target.value)}
      />
      <button type="submit">Save User</button>
    </form>
  );
};

export default UserForm;
