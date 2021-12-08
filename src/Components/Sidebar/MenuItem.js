import React from "react";
function MenuItem(props) {
  const { name } = props
  return (
    <span>{name}</span>
  );
}
export default MenuItem