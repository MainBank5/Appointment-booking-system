

const Payment = () => {
  return (
    <div>
        <div>
            <h1>Pay with Card</h1>
            <form>
                <input type="email" required/>

                <div>
                  <label htmlFor="card-info">Card information </label>
                  <input id="card-info" type="number" required />

                    <div className="flex">
                     <input id="date" type="date" />
                     <input id="cvc" type="number"/>
                    </div>
                </div>

                <input type="text" id="name" />
                <button className="btn">Pay</button>
            </form>

        </div>
    </div>
  )
}

export default Payment;