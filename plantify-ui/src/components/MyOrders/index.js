import { TextContent } from "../../components/TextContent";

import style from "./index.module.scss";

import pendingIcon from "../../icons/pending.svg";
import approveIcon from "../../icons/approve.svg";
import cancelIcon from "../../icons/cancel.svg";

export const MyOrders = () => {
    return (
        <div className={style.wrapper}>
            <TextContent title="Sifarişlərim" />
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={style.id}>
                            <img src={approveIcon} alt="" />
                            <p>#123456789</p>
                        </td>
                        <td>2022-03-11 23:48:17</td>
                        <td>approve</td>
                        <td>3400 AZN</td>
                    </tr>
                    <tr>
                        <td className={style.id}>
                            <img src={pendingIcon} alt="" />
                            <p>#123456789</p>
                        </td>
                        <td>2022-03-11 23:48:17</td>
                        <td>approve</td>
                        <td>3400 AZN</td>
                    </tr>
                    <tr>
                        <td className={style.id}>
                            <img src={cancelIcon} alt="" />
                            <p>#123456789</p>
                        </td>
                        <td>2022-03-11 23:48:17</td>
                        <td>approve</td>
                        <td>3400 AZN</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
