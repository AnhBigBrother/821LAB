import { useDispatch, useSelector } from "react-redux";
import Table from './Table.js';
import action from '../redux/action.js';
import { useEffect, useState } from "react";


const Body = ({ data }) => {
    const state = useSelector(store => store);
    const [dataToday, setDataToday] = useState([]);
    const dispatch = useDispatch();
    const handleClick = (payload) => {
        dispatch(action(payload));
    }
    useEffect(() => {
        if (data) {
            const toDay = new Date();
            const newToday = data.filter(x => eval('new ' + x[0]).toDateString() === toDay.toDateString());
            setDataToday(newToday);
        }
    }, [data])
    return (
        <div className="relative flex-grow bg-slate-300 flex flex-row">
            <div className="relative w-80 h-full border border-white flex flex-col justify-start items-center p-5 ">
                <button className="p-3 w-52 rounded-xl" style={state === 'all' ? { backgroundColor: 'white' } : { backgroundColor: 'transparent' }} onClick={() => handleClick('all')}>All</button>
                <button className="p-3 w-52 rounded-xl" style={state === 'active' ? { backgroundColor: 'white' } : { backgroundColor: 'transparent' }} onClick={() => handleClick('active')}>Active</button>
                <button className="p-3 w-52 rounded-xl" style={state === 'left' ? { backgroundColor: 'white' } : { backgroundColor: 'transparent' }} onClick={() => handleClick('left')}>Have left</button>
            </div>
            <div className="relative w-full h-full p-5 border border-white">
                <Table data={dataToday} />
            </div>
        </div>
    )
}


export default Body;