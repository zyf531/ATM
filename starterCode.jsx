// let transactionState = 0; // state of this transaction
// let totalState = 0; // Account total at Bank
// let status = "Account Balance $zero";
// const handleChange = event => {
//   console.log(`handleChange ${event.target.value}`);
//   transactionState = Number(event.target.value);
// };
// const handleSubmit = event => {
//   totalState += transactionState;
//   status = `Account Balance $ ${totalState}`;
//   document.getElementById("total").innerHTML = status;
//   event.preventDefault();
// };

const ATMDeposit = ( {onChange, isDeposit, deposit}) => {
  const choice = ['Deposit', 'Cash Back'];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" onChange={onChange} value={deposit} ></input>
      <input type="submit" value = 'Submit'></input>
    </label>
  );
};

const Account = () => {
const [deposit,setDeposit] = React.useState(0)// state of this transaction
const [totalState, setTotalState] = React.useState(0);
const [isDeposit,setIsDeposit] = React.useState(true);
let status = `Account Balance $ ${totalState}`;

const handleChange = event => {
  console.log(`handleChange ${event.target.value}`);
  setDeposit(Number(event.target.value));
};
const handleSubmit = (event) => {
  console.log(totalState,deposit);
  if(deposit <= 0 ) {
    alert('授权金额不正确，拒绝交易');
  }else if (!isDeposit && totalState < deposit) {
    alert('交易金额超出账户余额，拒绝交易')
  }else{
    let nweTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(nweTotal);
  }
  event.preventDefault();
};

  return (
    <>
    <h2> {status}</h2>
    <hr />
    <button onClick={() =>setIsDeposit(true)}  type="button" >Deposit</button>
    <button onClick={() =>setIsDeposit(false)}  type="button" >Cash Back</button>
    <hr />
    <form onSubmit={handleSubmit}>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit} deposit={deposit} > Deposit</ATMDeposit>
    </form>
    </>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
