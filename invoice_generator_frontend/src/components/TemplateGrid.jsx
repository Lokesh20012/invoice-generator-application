import { templates } from "../assets/assets";


const TemplatGrid = () => {
    return(
       <div className="row g-3">
        {
            // used map for iterate, first extract the objects in template array and return
                templates.map(({id,label,image})=>(
                    <div key={id} className="col-12 col-sm-4 col-lg-4">
                    <div className="border-rounded shadow-sm overflow-hidden template-hover cursor-pointer" title={label}>
                        <img src={image} alt="label" className="w-100" loading="lazy"/>
                    </div>
                    </div>
                
            ))
        }
       </div>
    )
}
export default TemplatGrid;