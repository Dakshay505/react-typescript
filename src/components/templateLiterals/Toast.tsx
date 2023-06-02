
type horizontal ="left" | "right" | "center"
type vertical ="top" | "bottom" | "center"

type ToastProps ={
    position:Exclude<`${horizontal}-${vertical}`,"center-center"> |"center"
}


const Toast = ({position}:ToastProps) => {
  return (
    <div>
        The position is {position};
    </div>
  )
}

export default Toast