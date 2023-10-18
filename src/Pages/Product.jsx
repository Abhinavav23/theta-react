import React from "react";
import { useSearchParams } from "react-router-dom";


export const Product = () => {
    const [search, setSearch] = useSearchParams();

    // const selectColor = (e) => {
    //     // const {value} = e.target;
    //     console.log("color: ", e.target.value);
    //     search.set("color", e.target.value);
    //     setSearch(search);
    // }

    // const selectSize = (e) => {
    //     const {value} = e.target;
    //     console.log("size: ", value);
    //     // setSearch({...search, size: e.target.value})
    //     // const colorValue = search.get("color");
    //     // setSearch({color: colorValue, size: e.target.value});
    //     // update the value of search and update the search using setSearch
    //     search.set("size", value);
    //     setSearch(search);
    // }

    // const selectFabric = (e) => {
    //     const {value} = e.target;
    //     console.log("fabric: ", value);
    //     search.set("fabric", value);
    //     setSearch(search);
    // }

    const selectFilter = (e) => {
        const {value, name} = e.target;
        console.log('target', e.target);
        search.set(name, value);
        setSearch(search)
    }

  return (
    <section>
      <div>Product</div>
      <h3>Apply filters</h3>
      <div>
        <label htmlFor="color">select color: </label>
        <select name="color" id="color" onChange={selectFilter}>
          <option value="" disabled selected>
            select one
          </option>
          <option value="black">black</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="white">white</option>
        </select>
      </div>

      <div>
        <label htmlFor="size">select size: </label>
        <select name="size" id="size"  onChange={selectFilter}>
          <option value="" disabled selected>
            select one
          </option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
          <option value="xLarge">xLarge</option>
        </select>
      </div>

      <div>
        <label htmlFor="fabric">select fabric: </label>
        <select name="fabric" id="fabric"  onChange={selectFilter}>
          <option value="" disabled selected>
            select one
          </option>
          <option value="cotton">cotton</option>
          <option value="woolen">woolen</option>
        </select>
      </div>
    </section>
  );
};

// query params
// starts with ?
// always have key value pair separated by = EX: color=green
// multiple query parameters can be present and written using &