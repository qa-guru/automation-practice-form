import { useState } from "react";
import FormMain from "../features/PracticeForm/model/FormMain/FormMain";
import FormResult from "../features/PracticeForm/ui/FormResult/FormResult";
import ContainerLeft from "../shared/ui/Containers/ContainerLeft/ContainerLeft";
import ContainerRight from "../shared/ui/Containers/ContainerRight/ContainerRight";
import "./PracticeForm.scss"

const PracticeForm: React.FC = (props) => {
  const [data, setData] = useState();

  return (
    <>
      <div className="page">
        <ContainerLeft>
          <FormMain setData={setData} />
        </ContainerLeft>
        <ContainerRight>
          <div>{data && <FormResult data={data} />}</div>
        </ContainerRight>
      </div>
    </>
  );
};

export default PracticeForm;
