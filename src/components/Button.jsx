

function Button(props){
    return(
        <div>
            <div className="h-40 w-40 rounded-full absolute -bottom-2 left-1 z-10" style={{backgroundColor: props.secondary}}></div>
            <div className="h-44 w-44 rounded-full absolute bottom-0 z-20" style={{backgroundColor: props.main}}></div>
            <div className="h-32 w-32 rounded-full absolute z-30 bg-slate-300 bottom-6 left-6"></div>
            <div className="h-32 w-32 rounded-full absolute z-30 bg-white bottom-5 left-6 z-40"></div>
            <img src={props.src} alt='sign' className="absolute z-50 right-12 top-12" id={props.id}/>
        </div>
    )
}

export default Button