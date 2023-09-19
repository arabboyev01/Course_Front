import React from 'react'

export function renderImageCell(params: any) {
  return <img src={params.value} alt={`Image of ${params.row.name}`} style={{ width: 30, height: 30,  borderRadius: '30px', objectFit: "cover"}} />;
}

export function CustomInputCell(params: any) {
  const [inputValue, setInputValue] = React.useState(params.value);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    params.onCellValueChange({ id: params.row.id, value: inputValue });
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      style={{ width: '100%', height: '100%', border: "none" }}
    />
  );
}