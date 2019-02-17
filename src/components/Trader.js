import React, { Component } from 'react'

export default class Trader extends Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }

  modalButtonClicked(e) {
    console.log("ITEM", e)
  }
  
  render() {
    const { trader } = this.props

    console.log("IN TRADER", trader )
    return (
     
        <div className="col-lg-4">


        <Modal show={this.state.show} handleClose={this.hideModal} >
          <p>{trader.companyname}</p>
          <p>| {trader.tradername} | rating | {trader.ratetotal}/{trader.totaljobs} |</p>
          <span className="heading">User Rating</span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <p>4.1 average based on 254 reviews.</p>
          <hr ></hr>
          <div className="row">
            <div className="side">
              <div>5 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-5"></div>
              </div>
            </div>
            <div className="side right">
              <div>150</div>
            </div>
            <div className="side">
              <div>4 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-4"></div>
              </div>
            </div>
            <div className="side right">
              <div>63</div>
            </div>
            <div className="side">
              <div>3 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-3"></div>
              </div>
            </div>
            <div className="side right">
              <div>15</div>
            </div>
            <div className="side">
              <div>2 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-2"></div>
              </div>
            </div>
            <div className="side right">
              <div>6</div>
            </div>
            <div className="side">
              <div>1 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar-1"></div>
              </div>
            </div>
            <div className="side right">
              <div>20</div>
            </div>
          </div>


          <div className="modal fade" id={`myModal-${ trader.id }`} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div className="modal-body">




          <div className="container">
        

         



        
          
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

        </Modal>






              <img className="bd-placeholder-img rounded-circle" alt="fred" width="140" height="140" src="https://picsum.photos/200/200/?random={trader.id}"></img>
              
              <h2>{ trader.companyname }</h2>
              <p>{trader.tradername} <br />  { trader.address }<br />  Distance: { trader.distance }<br />  lon: { trader.lon }<br />  lat:{ trader.lat }</p>
              <button type="button" className="btn btn-primary" data-toggle="modal" onClick={this.showModal} id={`myModal-${ trader.id }`}>Launch [ {trader.id} ]</button>
              {/* <p><a className="btn btn-secondary" href="rating.html?t={trader.id}" role="button">View details [ {trader.id} </a></p> */}
        </div>
       
        
      
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};