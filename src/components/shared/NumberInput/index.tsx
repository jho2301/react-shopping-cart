import { NumberInputContainer, IncreaseButton, DecreaseButton } from './style';
import Container from '../Container';
import Input from '../Input';
import { ChangeEvent, useEffect, useState, VFC } from 'react';

interface Props {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
}

const NumberInput: VFC<Props> = ({ value, setValue, min = -Infinity, max = Infinity }) => {
  const [num, setNum] = useState(value);

  const isValidInput = (input: number) => input >= min && input <= max;

  const onChangeInput = ({ target: { valueAsNumber } }: ChangeEvent<HTMLInputElement>) => {
    setNum(valueAsNumber);
  };

  const onBlurInput = () => {
    if (!isValidInput(num)) {
      setNum(value);
      return;
    }

    setValue(num);
  };

  const onClickIncreaseButton = () => {
    if (!isValidInput(value + 1)) return;

    setValue(value + 1);
  };

  const onClickDecreaseButton = () => {
    if (!isValidInput(value - 1)) return;

    setValue(value - 1);
  };

  useEffect(() => {
    if (!isValidInput(value)) {
      throw Error('Invalid value: value should be within min and max range ');
    }

    setNum(value);
  }, [value]);

  return (
    <NumberInputContainer>
      <Input
        type="number"
        value={num}
        min={min}
        max={max}
        onChange={onChangeInput}
        onBlur={onBlurInput}
      />
      <Container>
        <IncreaseButton onClick={onClickIncreaseButton}>
          <img src={process.env.PUBLIC_URL + '/icons/number-input-arrow.svg'} alt="arrow" />
        </IncreaseButton>
        <DecreaseButton onClick={onClickDecreaseButton}>
          <img src={process.env.PUBLIC_URL + '/icons/number-input-arrow.svg'} alt="arrow" />
        </DecreaseButton>
      </Container>
    </NumberInputContainer>
  );
};

export default NumberInput;