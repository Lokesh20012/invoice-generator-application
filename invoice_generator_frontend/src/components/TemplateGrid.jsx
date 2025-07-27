import { useContext } from "react";
import { templates } from "../assets/assets";
import { AppContext } from "../context/AppContext";

// onTemplateClick is a callback function from the parent, 
// used by the child when a template is clicked.
const TemplatGrid = ({onTemplateClick}) => {

    const {selectTemplate, setSelectTemplate} = useContext(AppContext);

    return(
       <div className="row g-3">
        {
            // used map for iterate, first extract the value from template array and return
                templates.map(({id,label,image})=>(
                    <div key={id} className="col-12 col-sm-4 col-lg-4">
                    <div className="border-rounded shadow-sm overflow-hidden template-hover cursor-pointer" title={label}
                    onClick={() => onTemplateClick(id)}>
                    {/* // onTemplateClick is actually the handleTemplateClick function from the parent,
                    // that function runs. */}
                        <img src={image} alt="label" className="w-100" loading="lazy"/>
                    </div>
                    </div>
                
            ))
        }
       </div>
    )
}
export default TemplatGrid;