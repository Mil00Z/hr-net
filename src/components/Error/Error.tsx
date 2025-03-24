
interface ErrorProps {
  error:string
}

const Error = ({error} : ErrorProps) => {

  return (
    <h1 data-error={error}>Something Went Wrong with Datas</h1>
  )
}
export default Error