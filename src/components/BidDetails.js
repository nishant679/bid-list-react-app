import React from 'react';

const BidDetails = (props) => {
    const bidData = props.data || {};
    return(
        <div className="border">
            <div className="container text-danger d-flex justify-content-between">
                <p className="p-2">Car Name</p>
                <p className="p-2">Bid Amount</p>
            </div>
            {
                bidData.map(bid => {
                    const bidId = bid.id || "",
                        carTitle = bid.carTitle || "",
                        amount = bid.amount || "",
                        created = bid.created || "";

                    return(
                        <div className="container text-success d-flex justify-content-between">
                            <p className="p-2">{carTitle}</p>
                            <p className="p-2">{amount}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default BidDetails; 