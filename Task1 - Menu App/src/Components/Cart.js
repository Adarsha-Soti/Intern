import { Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart({items, remove}) {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height = "0";
    };

    // Calculate total price
    const totalPrice = items.reduce((accumulator, currentValue) => accumulator + currentValue.qty * currentValue.price, 0);
    const GST = totalPrice * 0.1;

    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <Grid container>
                    <Grid item  xs={12} sm={12} md={6}>
                    <h2 className='text'>Cart</h2>
                        <hr/>
                        <div className="table-responsive flex" id="table">
                            <table className="table">
                                <thead >
                                <tr className='text'>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody >
                                {items.map((item) => (
                                    <tr key={item.id} className='text'>
                                        <td><strong>{item.name}</strong></td>
                                        <td>{item.qty}</td>
                                        <td>Rs{item.price}</td>
                                        <td id="remove">
                                        <IconButton aria-label="delete" onClick={() => remove(item)} className="far fa-trash-alt delete ">
                                            <DeleteIcon />
                                        </IconButton>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <h2 className='text'>Checkout</h2>
                        <hr/>
                        <Grid container>
                            <Grid item xs={6}>
                                        <p className=" text">Subtotal</p>
                                        <p className=" text">Rs{totalPrice}</p>
                            </Grid>
                            <Grid item xs={6}>
                                    <div className="text">
                                        <p >Service Charge</p>
                                        <p>Rs.{GST}</p>
                                    </div>
                            </Grid>
                        </Grid>
                        <hr/>
                        <button className='btn primary-btn text' style={{fontSize:'20px',width:"70%",marginLeft:"50px"}}
                                id="checkout" type="button">
                                    Checkout :
                                    <span className=" text">Rs{totalPrice + GST}</span>
                        </button>
                    </Grid>
                    
                 </Grid>
        </div>
    );
}

export default Cart;
