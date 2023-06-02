

type typeOwnProps<E extends React.ElementType> = {
    size : "md" |"sm"| "lg"
    color:"primary" |"secondary"
    children : React.ReactNode
    as ?:E
}

type TextProps<E extends React.ElementType> = typeOwnProps<E> & Omit<React.ComponentProps<E>,keyof typeOwnProps<E>>

const Text = <E extends React.ElementType = 'div'>({size,color,children,as}:TextProps<E>) => {
    const Component = as || 'div'
  return (
    <Component className={`${color}-${size}`}>{children}</Component>
  )
}

export default Text