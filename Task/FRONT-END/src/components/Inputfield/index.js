const Inputfield = ({value,setValue, name,fieldId, label, type} ) => {
    return (
        <div className="mb-3 row">
        <label htmlFor={fieldId} className="col-sm-2 col-form-label">{label}</label>
        <div className="col-sm-10">
            <input  name={name} type="text" className="form-control-plaintext" onChange={(e) => setValue(e.target.value)} value={value} id={fieldId} />
        </div>
    </div>
    )
}

export default Inputfield