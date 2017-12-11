import React, { Component } from 'react';
class JobHeaderLabels extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="header_labels">
            <table cellSpacing={"0"} cellPadding={"0"}>
                <thead>
                    <tr>
                        <th className="jnu">Job #</th>
                        <th className="csr">CSR</th>
                        <th className="cli">Client</th>
                        <th className="qty">QTY</th>
                        <th className="jna">Job Name</th>
                        <th className="dat">Data</th>
                        <th className="pri">Print</th>
                        <th className="sto">Stock Picked</th>
                    </tr>
                </thead>
            </table>
        </div>);
    }
}

export default JobHeaderLabels
