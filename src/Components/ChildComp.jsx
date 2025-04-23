const ChildComp = ({ texto, arr, children, info }) => {
  console.log(texto, arr, children)
  return (
    <div>
      <h2>Componente hijo</h2>
      {texto}
      {arr}
      {children('info')}
    </div>
  )
}

export default ChildComp
