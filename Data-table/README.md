# Orders Dashboard

A React-based **Orders Dashboard** that displays a list of orders with filtering, sorting, and management functionalities. It is designed to help visualize and manage orders efficiently.

---

## Features

- **Display Orders:** Shows a table with order details like ID, date, customer, product, price, payment status, and order status.
- **Sorting:** Click on column headers to sort orders by `Order ID`, `Date`, `Customer`, or `Price`.
- **Filtering:** Filter orders by:
  - Customer name (search)
  - Order ID
  - Payment status (Paid, Pending, Not paid)
  - Order status (New, Completed, Pending, Canceled)
  - Price range (Min/Max)
  - Date range (From/To)
- **Clear Filters:** Reset all filters with a single click.
- **Export and Add Orders:** Placeholder buttons for exporting data or adding new orders.

---

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

---

## Usage

- Filtering Orders: Use the input fields and dropdowns at the top to filter orders based on customer name, order ID, payment, status, price, or date range.

- Sorting Orders: Click on the table headers (Order ID, Date, Customer, Price) to sort the data ascending/descending.

- Clear Filters: Click the "Clear Filters" button to reset all filters.

- Export Orders: Placeholder button available for future export functionality.

- Add New Orders: Placeholder button available for future order creation functionality.

## File Structure

orders-dashboard/
│
├─ src/
│ ├─ components/
│ │ └─ OrdersDashboard.jsx
│ ├─ assets/
│ │ └─ data.js
│ ├─ App.js
│ ├─ index.js
│ └─ Home.css
│
├─ package.json
└─ README.md



## Customization

- Styling: Update Home.css to change the dashboard’s look and feel.

- Data: Modify initialOrders array in OrdersDashboard.jsx or load data dynamically from an API.

- Buttons: Implement the export and add new order functionalities as needed.



## Video

https://github.com/user-attachments/assets/3578d1c3-a92b-42db-aa9b-09e01951aa0b



