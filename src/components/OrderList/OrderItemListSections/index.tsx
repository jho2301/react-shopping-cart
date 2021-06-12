import { VFC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Order } from '../../../types';
import OrderItemListSection from './OrderItemListSection';

interface Props {
  orders: Order[];
}

const OrderItemListSections: VFC<Props> = ({ orders }) => (
  <>
    <ErrorBoundary fallbackRender={() => <div>ho ho </div>}>
      {orders.map((order) => (
        <OrderItemListSection key={order.orderId} order={order} />
      ))}
    </ErrorBoundary>
  </>
);

export default OrderItemListSections;
