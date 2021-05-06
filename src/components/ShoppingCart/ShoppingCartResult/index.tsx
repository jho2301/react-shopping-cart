import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Text from '../../shared/Text';

const ShoppingCartResult = () => {
  return (
    <div>
      <h3>결제예상금액</h3>
      <Container>
        <Text>결제예상금액</Text>
        <Text>21,700원</Text>
      </Container>
      <Button>주문하기(2개)</Button>
    </div>
  );
};

export default ShoppingCartResult;
