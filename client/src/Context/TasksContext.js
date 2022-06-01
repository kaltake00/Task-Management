import { createContext } from "react";
import Axios from "axios";

const TasksContext = createContext();

export function TasksProvider({children}){
    const { data } =  Axios.get('http://localhost:3001/tasks');
    console.log('Context - tasks data fetched successfully! - ',data)

    return (
        <TasksContext.Provider value={data}>{children}</TasksContext.Provider>
    );
}

export default TasksContext;