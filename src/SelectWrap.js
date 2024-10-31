const SelectWrap = ( {children, className, handleClick, style = {} } ) => {
  return (
    <div
    className={className}
    onClick={ handleClick }
    style={style}
    >
      {children}
    </div>
  )
}

export default SelectWrap