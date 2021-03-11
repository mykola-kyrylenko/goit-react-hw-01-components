import s from './TransactionHistory.module.css';

function itemHistory({ items }) {
    return (
        <table className={s.itemHistory}>
                <thead>
                    <tr className={s.headingList}>
                        <th className={s.headingItem}>Type</th>
                        <th className={s.headingItem}>Amount</th>
                        <th className={s.headingItem}>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr className={s.itemList} key={item.id}>
                            <td className={s.transact}>{item.type}</td>
                            <td className={s.transact}>{item.amount}</td>
                            <td className={s.transact}>{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}
  

    


export default itemHistory;