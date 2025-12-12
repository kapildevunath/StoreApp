# Store Manager – Full Stack Application

## Overview
This is a simple full-stack CRUD application built as part of a technical assessment.  
The application allows users to create, view, update, and delete products.

---

## Architecture

- **Frontend**: React (JavaScript)
- **Backend**: ASP.NET Core Web API (.NET 8)
- **Database**: SQLite
- **ORM**: Entity Framework Core
- **API Style**: RESTful

### Data Flow
React Frontend  
→ HTTP (JSON)  
→ ASP.NET Core Web API  
→ Entity Framework Core  
→ SQLite Database  

---

## Project Structure
/StoreApi
├── Controllers
├── Data
├── Models
├── Migrations
├── Program.cs
└── StoreApi.csproj
/store-frontend
├── src
│ ├── components
│ │ ├── AddProduct.js
│ │ ├── EditProduct.js
│ │ └── ProductList.js
│ └── App.js
└── package.json


---

## Prerequisites

- .NET 8 SDK
- Node.js (npm)

---

## Running the Application

### Backend (API)

```bash
cd StoreApi
dotnet run


The API will run on:
http://localhost:5199

Swagger UI:
http://localhost:5199/swagger

Frontend (React)
cd store-frontend
npm install
npm start

The frontend will run on:
http://localhost:3000

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /api/products      | Get all products  |
| GET    | /api/products/{id} | Get product by ID |
| POST   | /api/products      | Create product    |
| PUT    | /api/products/{id} | Update product    |
| DELETE | /api/products/{id} | Delete product    |


Features
Full CRUD functionality
RESTful API design
React-based frontend
SQLite database with EF Core migrations
Clean and maintainable code structure
CORS-enabled communication between frontend and backend

Notes
The application was intentionally kept simple to demonstrate architectural understanding and clean implementation.
No UI frameworks were used to keep the solution lightweight and focused on core functionality.

Author: Kapil Devunath