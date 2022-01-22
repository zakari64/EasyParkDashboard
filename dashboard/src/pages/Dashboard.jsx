import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import statusCards from "../assets/JsonData/status-card-data.json";

import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";

import "./dashboard.css";

const topCustomers = {
  head: ["utilisateurs", "opérations totales", "economies"],
  body: [
    {
      username: "john doe",
      order: "49",
      price: "$150",
    },
    {
      username: "frank iva",
      order: "50",
      price: "$120",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$100",
    },
    {
      username: "frank iva",
      order: "110",
      price: "$90",
    },
    {
      username: "anthony baker",
      order: "80",
      price: "$85",
    },
  ],
};

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["Id opération", "utilisateurs", "date", "statut"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",

      status: "Acceptée",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",

      status: "Validée",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",

      status: "En cours",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",

      status: "En cours",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",

      status: "Refusée",
    },
  ],
};

const orderStatus = {
  Acceptée: "primary",
  "En cours": "warning",
  Validée: "success",
  Refusée: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <h2 className="page-header" style={{ textAlign: "center" }}>
        Dashboard
      </h2>
      <div className="row">
        <div className="col-6" style={{ width: "100%" }}>
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="btn">
          <Link to="/layout/form3">
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                padding: "10px",
                background: "349eff",
              }}
              variant="contained"
            >
              Réserver
            </Button>
          </Link>
        </div>

        {/* <div className="col-4" style={{ width: "100%" }}>
          <div className="card">
            <div className="card__header">
              <h3 style={{textAlign:'center',fontSize:'22px'}}>Données</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div> */}
        <div className="col-8" style={{ width: "100%" }}>
          <div className="card">
            <div className="card__header">
              <h3 style={{ fontSize: "22px", textAlign: "center" }}>
                Resumé operations
              </h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
