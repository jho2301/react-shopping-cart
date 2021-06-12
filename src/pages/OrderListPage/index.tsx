import { useEffect, VFC } from 'react';
import Loading from '../../components/Loading';
import OrderItemListSections from '../../components/OrderList/OrderItemListSections';
import Template from '../../components/shared/Template';
import useFetch from '../../service/hooks/useFetch';
import useLogin from '../../service/hooks/useLogin';
import { requestOrders } from '../../service/request/order';

const OrderListPage: VFC = () => {
  const { userName } = useLogin();
  const orders = useFetch(() => requestOrders(userName));

  useEffect(() => {
    if (orders.error) throw orders.error;
  }, [orders.error]);

  return (
    <Template title="주문 목록">
      <Loading isLoading={orders.isLoading}>
        <OrderItemListSections orders={[...(orders.data ?? [])].reverse()} />
      </Loading>
    </Template>
  );
};

export default OrderListPage;
