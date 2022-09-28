import './App.css';
import Select from './Select';

export default function App() {
  const options = [
    { value: "delhi", label: "Delhi" },
    { value: "haryana", label: "Haryana" },
    { value: "gujarat", label: "Gujarat" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "UP", label: "Uttar Pradesh" },
    { value: "punjab", label: "Punjab" },
  ];

  return (
    <div className="App">
      <h1>Datamall Test - Custom Select Component</h1>

      <h3>Multi select with Search</h3>
      <Select
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />

      <h3>Single select with Search</h3>
      <Select
        isSearchable
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />

      <h3>Single select without Search</h3>
      <Select
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />

      <h3>Multi select without Search</h3>
      <Select
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}

