function Hello(){
  var myName="Sadik";
  let num=456;
  let fullName=()=>{
    return"Sadik Ghimire";
  }
  return <p>MessageNo:{num} Hello Listen to me. I'm {fullName()}</p>

}
export default Hello;