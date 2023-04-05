const Header = ({ openForm }) => {
  return (
    <div className="header">
      <div className="nav">
        <div>
          <img src="logo.svg" />
        </div>
        <button onClick={openForm}>Sell your car</button>
      </div>

      <h1>Selling your car? <br/> We've got the money.</h1>
    </div>
  );
};

export default Header;
