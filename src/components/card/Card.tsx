 import style from "./Card.module.scss"


interface props {
    coinName : string
    value : number | string
    netChange24h : number | string
    netChange7d : number | string
    logoUrl : string
}
const Card = ({
    coinName,
    value,
    netChange24h,
    netChange7d,
    logoUrl,
  }: props) => {
    
    // Determine color based on positive or negative change
    const getColor = (change : any) => (change >= 0 ? 'green' : 'red');
  
    return (
      <div className={style.cardcontainer}>
        <div className={style.cardMain}>
        <div className={style.coinlogo}>
          <img src={logoUrl} alt={`${coinName} logo`} />
        </div>
 
        <div className={style.coininfo}>
          <h4>{coinName}</h4>
          <div className={style.info}>
            <p>Current Value : {value}</p>
          <div className={style.details}>
            <p>
              Last 24h Change :{' '}
              <span style={{ color: getColor(netChange24h) } }>
                {netChange24h} %
              </span>
            </p>
          </div>
          <div>
            <p>
              Last 7d Change :{' '}
              <span style={{ color: getColor(netChange7d) }}>
                {netChange7d} %
              </span>
            </p>
          </div>
          </div>
        </div>
      
       
        </div>
       
      </div>
    );
  };
  
  export default Card;