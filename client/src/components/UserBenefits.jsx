import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';

const UserBenefits = () => {
  return (
    <div>
      <h1>Cuenta user benefits</h1>
      <CardColumns>
        <Card>
          <Card.Header>Time</Card.Header>
          <Card.Text>
            Receive daily rewards and discounts from local restaurants.
          </Card.Text>
        </Card>
        <Card>
          <Card.Header>Rewards</Card.Header>
          <Card.Text>
            Cuenta users save an average of 5 mins during the bill splitting
            process.
          </Card.Text>
        </Card>
        <Card>
          <Card.Header>Transactions</Card.Header>
          <Card.Text>
            Access your past transactions at any time with one click.
          </Card.Text>
        </Card>
        <Card>
          <Card.Header>Community</Card.Header>
          <Card.Text>
            Access your past transactions at any time with one click.
          </Card.Text>
        </Card>
      </CardColumns>
    </div>
  );
};

export default UserBenefits;
