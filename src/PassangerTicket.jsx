function PassangerTicket(props){
    return (
      <div>
        <h3>Ticak Details</h3>
        <p>Name : {props.name}</p>
        <p>Destination : {props.destination}</p>
        <p>Gender : {props.gender}</p>
        <p>Seat : {props.seat}</p>
      </div>
    )
  }

  export default PassangerTicket;