import { Avatar, Container, Typography} from '@material-ui/core';
import React, {useContext, useEffect, useState} from 'react';
import Switch from '@material-ui/core/Switch';
import BidDetails from './BidDetails';

const MerchantBid = (props) => {
    // const merchantData = useContext(MerchantContext);
    // const  merchantList = merchantData.merchantList ;
    // let [merchant, updateMerchant] = useState([]);
    // merchantData.getMerchantData();  

    const merchant = props.merchantList || [],
        loading = props.loading || false;

    let [minBid, setMinBid] = useState(false);

    const handleChange = (event) =>{
        // setMinBid(minBid = true);
        setMinBid(event.target.name = event.target.checked);
    }

    const [divClicked, setDivClicked] = useState(false);
    const handleDivClick = () => {
        setDivClicked(prevDiv => !prevDiv);
    };

    if(loading){
        return(
            <h5>Loading</h5>
        );
    };   
    


    // useEffect(()=>{
    //     // merchantData.getMerchantData();
    //     updateMerchant(merchant = merchantList[0] || []);
       
    // }, [])    

    

    // console.log("Merchant List ", merchantList);

    return (
        <div className="container">
            <div className="d-flex justify-content-between container">
                Toggle between Max and Min Bid

                <Switch
                    checked={minBid}
                    onChange={handleChange}
                    name="minBid"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
            
            {
                merchant.map(mer => {
                    const fName = mer.firstname || "",
                        lName = mer.lastname || "",
                        avatar = String(mer.avatrUrl) || "",
                        bid = mer.bids || {},
                        maxBid = Math.max.apply(Math, bid.map(function(o) {return o.amount;})),
                        minBidAmount = Math.min.apply(Math, bid.map(function(o) {return o.amount;}));               
                     

                        
                    return(
                        <Container>
                            <div className="border mt-5 d-flex justify-content-between p-5" onClick={handleDivClick}>
                                <Avatar alt={fName} src={avatar}/>
                                <Typography color="primary">{fName + " " + lName}</Typography>
                                {/* <div> Max Bid : {maxBid} </div> */}
                                {minBid && <div>Min Bid : {minBidAmount} </div> || <div>Max Bid : {maxBid}</div>}                                
                            </div>
                            <div>
                                
                                {divClicked && <BidDetails data={bid} /> }
                            </div>
                        </Container>
                    );
                })
            }
        </div>
    );
};

export default MerchantBid;