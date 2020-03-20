import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, // 불변성을 지키기 위해 객체를 한번 복사 후
      [name]: value, // 특정 값을 교체시켜준다.
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  }
  return (
    <div>
      <input
      name="name"
      placeholder="이름"
      onChange={onChange}
      value={name} />
      <input
      name="nickname"
      placeholder="닉네임"
      onChange={onChange}
      value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;