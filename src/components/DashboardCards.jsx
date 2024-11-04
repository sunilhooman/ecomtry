import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './DashboardCard.css'

const DashboardCards = ({ totalOrders = 10, totalCustomers = 100, totalSale = 5000, topCategories = ['Electronics', 'Fashion'] }) => {
  return (
    <div className="dashboard-cards">
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Customers</Card.Title>
              <Card.Text>
                <h3>{totalCustomers}</h3>
              </Card.Text>
              <small className="text-muted">Up by 0.0%</small>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Orders</Card.Title>
              <Card.Text>
                <h3>{totalOrders}</h3>
              </Card.Text>
              <small className="text-muted">Up by 0.0%</small>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Sale</Card.Title>
              <Card.Text>
                <h3>${totalSale}</h3>
              </Card.Text>
              <small className="text-muted">Up by 0.0%</small>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Top Performing Categories</Card.Title>
              <Card.Text>
                {topCategories.length > 0 ? (
                  topCategories.map((category, index) => (
                    <div key={index}>{category}</div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardCards;
