import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const xyz = getProductList();

    xyz
      .then(function (products) {
        setProductList(products);
        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "price") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title - y.title ? 1 : -1;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  return (
    <div>
      <div className=" bg-gray-100 p-10 py-16">
        <div className="bg-white p-24">
          <div className=" flex justify-end gap-1">
            <input
              value={query}
              placeholder="search"
              className="w-40 border border-gray-700 p-2"
              onChange={handleQueryChange}
            />

            <select
              onChange={handleSortChange}
              className="w-40 font-bold border border-gray-700 p-2 gap-2"
            >
              <option value="default">Default Sorting</option>
              <option value="name">Sort by name</option>
              <option value="price">Sort by price</option>
            </select>
          </div>
          <div className="mt-10">
            {data.length > 0 && <ProductList products={data} />}
            {data.length == 0 && <NoMatching />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
