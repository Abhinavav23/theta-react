import React, { useRef, useState } from "react";

export const RefEx2 = () => {
  // 1. storing value in a local variable;
  // updating the value doesn't re rerender the comp hence update is not seen on UI
  // value is not persisted between re renders
  let name = "default";
  const updateName = () => {
    console.log("before", name); //default name
    name = "Abhinav";
    console.log("after", name); //abhinav
    // component doesnt re render
  };

  //   2. using state
  //   updating the value re rerender the comp hence update is seen on UI
  //  value is persisted between re renders
  const [address, setAddress] = useState("default address");
  const updateAddress = () => {
    setAddress("India");
  };

  const [role, setRole] = useState("default Role");
  const updateRole = () => {
    setRole("Instructor");
  };

  //   3. using ref
  // updating the value doesnt re render the component
  //   value will be persisted between re renders

  const batchNameRef = useRef("default batch");
  const updateBatch = () => {
    batchNameRef.current = "Theta";
  };

  console.log("name", name);
  console.log("address", address);
  console.log("role", role);
  console.log("batch name", batchNameRef.current);
  return (
    <section>
      <div>Name: {name}</div>
      <button onClick={updateName}>update name</button>
      <br />
      <br />
      <div>Address: {address}</div>
      <button onClick={updateAddress}>update address</button>
      <br />
      <br />
      <div>Role: {role}</div>
      <button onClick={updateRole}>update Role</button>
      <br />
      <br />
      <div>Batch: {batchNameRef.current}</div>
      <button onClick={updateBatch}>update batch</button>
    </section>
  );
};
