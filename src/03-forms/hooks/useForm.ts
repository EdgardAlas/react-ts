import { ChangeEvent, useState } from 'react';

export const useForm = <T extends object>(data: T) => {
  const [registerData, setRegisterData] = useState<T>(data);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const reset = () => {
    setRegisterData({ ...data });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...registerData,
    data: registerData,
    onChange,
    reset,
    isValidEmail,
  };
};
