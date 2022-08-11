import { useState } from "react";

import { AccountNav } from "../../components/AccountNav";
import { MyAccount } from "../../components/MyAccount";
import { MyOrders } from "../../components/MyOrders";
import { ShippingInfo } from "../../components/ShippingInfo";

export const Account = () => {
    const [isActive, setIsActive] = useState("account");
    let tab;
    if(isActive === "account"){
        tab = <MyAccount />
    }
    else if(isActive === "orders"){
        tab = <MyOrders />
    }
    else{
        tab = <ShippingInfo/>
    }

    return (
        <main className="container my-4">
            <div className="row gy-4">
                <div className="col-md-4 col-12">
                    <AccountNav state={[isActive, setIsActive]} />
                </div>
                <div className="col-md-8 col-12">
                    {tab}
                </div>
            </div>
        </main>
    );
}