import s from './Statistics.module.css';

function Statistics({ title, stats, color }) {
    return (
        <section className={s.statistics}>

            {title && <h2 className={s.title}>{title}</h2>}
            

            <ul className={s.statList}>
                {stats.map(stat => (
                    <li className={s.stat} key={stat.id} style={{ backgroundColor: `${color}` }}>
                        <span className={s.label}>{stat.label}</span>
                        <span className={s.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>

    );
};

// Statistics.defaultProps = {
//     title: "Upload stats",
// };

export default Statistics;
