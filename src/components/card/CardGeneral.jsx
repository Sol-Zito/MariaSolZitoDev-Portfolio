import { TitleCard } from "../Title"

export const CardGeneral =(ele)=>{
    const {name, description, tools} = ele
    return(
        <div className="bg-background shadow-xl ">
            <div className="p-2 grid grid-flow-row gap-2">
                <TitleCard name={name} />
                <div className="text-left">📝{description}</div>
                <p className="underline">Tools used:
                </p>
                    <ol className="grid lg:grid-cols-3 md:grid-cols-2">
                        {tools.map((ele,ind) => <li>{ind+1}: {ele}</li>)}
                    </ol>
            </div>
        </div>
    )

}

export const CardProyects =(name, description, images, tools)=>{
    return(
        <div className="bg-background grid grid-cols-2 gap-4 shadow-xl">
            <div className="px-2">
                <TitleCard name={name} />
                <div className="text-left">{description.substring(0,550)}...</div>
                <p>Tools used:
                    <ol className="grid grid-cols-2">
                        {tools.map((ele,ind) => <li>{ind+1}: {ele}</li>)}
                    </ol>
                </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {images.map((ele) => 
                    <img src={ele} alt="Imagen del projecto" width={100} className="m-auto"></img>
                )}
            </div>
        </div>
    )

}
  

export const CardFigma =(name, images)=>{
    return(
        <div className="">
            <TitleCard name={name} />
            <div className="grid grid-cols-3 gap-2">
                {images.length ?? images.map((ele) => (
                    <img src="" alt="">{ele}</img>
                    ))
                }
            </div>
        </div>
    )
}