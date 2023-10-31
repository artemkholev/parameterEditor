import { Route, Routes} from "react-router-dom";

import { GetPars } from "./getPars";

export const Routing = () => {
    return (
        <Routes>
          <Route path="/" element={<GetPars/>} />
        </Routes>
    );
};
