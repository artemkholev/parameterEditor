import { Route, Routes} from "react-router-dom";

import { GetPars } from "./getPars";
import TaskDetailsPage from "./task-details";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<GetPars />} />
            <Route path="/:id" element={<TaskDetailsPage/>} />
        </Routes>
    );
};
