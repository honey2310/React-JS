import React, { useState } from "react";
import "./Home.css";

const initialOrders = [
  {
    id: "#513271",
    date: "2022-02-10",
    customer: "Harry Potter",
    product: "1 x Invisibility Cloak",
    price: 249.99,
    payment: "Paid",
    status: "Completed",
  },
  {
    id: "#513272",
    date: "2022-02-11",
    customer: "Hermione Granger",
    product: "1 x Time Turner",
    price: 199.99,
    payment: "Pending",
    status: "New",
  },
  {
    id: "#513273",
    date: "2022-02-12",
    customer: "Ron Weasley",
    product: "1 x Wizard Chess Set",
    price: 89.99,
    payment: "Not paid",
    status: "Canceled",
  },
  {
    id: "#513274",
    date: "2022-02-13",
    customer: "Luna Lovegood",
    product: "1 x Spectrespecs",
    price: 59.99,
    payment: "Paid",
    status: "Completed",
  },
  {
    id: "#513275",
    date: "2022-02-14",
    customer: "Draco Malfoy",
    product: "1 x Dark Mark Pendant",
    price: 129.99,
    payment: "Paid",
    status: "New",
  },
  {
    id: "#513276",
    date: "2022-02-15",
    customer: "Neville Longbottom",
    product: "1 x Herbology Kit",
    price: 69.99,
    payment: "Pending",
    status: "Pending",
  },
  {
    id: "#513277",
    date: "2022-02-16",
    customer: "Alyona Kulish",
    product: "1 x Ollivander Wand",
    price: 39.0,
    payment: "Not paid",
    status: "Canceled",
  },
  {
    id: "#513278",
    date: "2022-02-17",
    customer: "Stanislav Ostrynskyi",
    product: "1 x Hogwarts Gift Trunk",
    price: 149.9,
    payment: "Pending",
    status: "New",
  },
  {
    id: "#513279",
    date: "2022-02-18",
    customer: "Arseniy Levchenko",
    product: "1 x Ollivander Wand",
    price: 78.0,
    payment: "Paid",
    status: "New",
  },
  {
    id: "#513280",
    date: "2022-02-19",
    customer: "Dmytro Ivanov",
    product: "2 x Hogwarts Gift Trunk",
    price: 299.8,
    payment: "Paid",
    status: "Completed",
  },
];

export default function Home() {
  const [orders, setOrders] = useState(initialOrders);
  const [filters, setFilters] = useState({
    search: "",
    id: "",
    payment: "All",
    status: "All",
    minPrice: "",
    maxPrice: "",
    fromDate: "",
    toDate: "",
  });
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sorted = [...orders].sort((a, b) => {
      if (field === "price")
        return order === "asc" ? a.price - b.price : b.price - a.price;
      if (field === "date")
        return order === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      return order === "asc"
        ? a[field].toString().localeCompare(b[field].toString())
        : b[field].toString().localeCompare(a[field].toString());
    });
    setOrders(sorted);
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      id: "",
      payment: "All",
      status: "All",
      minPrice: "",
      maxPrice: "",
      fromDate: "",
      toDate: "",
    });
    setOrders(initialOrders);
    setSortField(null);
    setSortOrder("asc");
  };

  const filteredOrders = orders.filter((order) => {
    const matchSearch = order.customer
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchId = order.id.toLowerCase().includes(filters.id.toLowerCase());
    const matchPayment =
      filters.payment === "All" || order.payment === filters.payment;
    const matchStatus =
      filters.status === "All" || order.status === filters.status;
    const matchPrice =
      (!filters.minPrice || order.price >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice || order.price <= parseFloat(filters.maxPrice));
    const matchDate =
      (!filters.fromDate ||
        new Date(order.date) >= new Date(filters.fromDate)) &&
      (!filters.toDate || new Date(order.date) <= new Date(filters.toDate));

    return (
      matchSearch &&
      matchId &&
      matchPayment &&
      matchStatus &&
      matchPrice &&
      matchDate
    );
  });

  return (
    <div className="orders-container">
      <header className="orders-header">
        <h1>Orders</h1>
        <div className="header-actions">
          <button className="filter-btn" onClick={handleClearFilters}>
            Clear Filters
          </button>
          <button className="export-btn">Export</button>
          <button className="add-btn">+ Add New</button>
        </div>
      </header>

      {/* FILTER SECTION */}
      <div className="filters-box">
        <div className="filter-row">
          <input
            type="text"
            placeholder="Search by Customer Name"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          <input
            type="text"
            placeholder="Order ID"
            value={filters.id}
            onChange={(e) => setFilters({ ...filters, id: e.target.value })}
          />
          <select
            value={filters.payment}
            onChange={(e) =>
              setFilters({ ...filters, payment: e.target.value })
            }
          >
            <option value="All">All Payments</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Not paid">Not paid</option>
          </select>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="All">All Status</option>
            <option value="New">New</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>

        <div className="filter-row">
          <input
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
          />
          <input
            type="date"
            value={filters.fromDate}
            onChange={(e) =>
              setFilters({ ...filters, fromDate: e.target.value })
            }
          />
          <input
            type="date"
            value={filters.toDate}
            onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
          />
        </div>
      </div>

      {/* ORDERS TABLE */}
      <table className="orders-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>Order ID</th>
            <th onClick={() => handleSort("date")}>Date</th>
            <th onClick={() => handleSort("customer")}>Customer</th>
            <th>Product</th>
            <th onClick={() => handleSort("price")}>
              Price {sortField === "price" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>£{order.price.toFixed(2)}</td>
                <td>
                  <span
                    className={`payment ${order.payment
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {order.payment}
                  </span>
                </td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
