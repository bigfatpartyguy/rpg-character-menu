import {useEffect, useRef} from 'react';
const usePreviousValue = (value: any): any => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export {usePreviousValue};
