import "./input.css";

type InputTypes = {
  placeholder: string,
  value: string | number,
  onChange: (value: string | number) => void,
  label: string,
  type?: "text" | "number",
}

export function Input({
  placeholder,
  value,
  onChange,
  label,
  type = "text",
}: InputTypes){
  return(
    <div className="input-container">
      <p className="label">{label}</p>
      <input 
        type={type}
        className="input" 
        placeholder={placeholder} 
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}