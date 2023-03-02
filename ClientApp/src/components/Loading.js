import ReactLoading from "react-loading";
  
export default function Loading() {
  return (
  <div style={{ paddingLeft: '275px', paddingTop: '250px', width: '50%', margin: 'auto' }}>
    <ReactLoading type="bars" color="lightgrey" height={667} width={375}/>
  </div>
  );
}