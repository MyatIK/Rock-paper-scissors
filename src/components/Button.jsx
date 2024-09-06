

function Button(props){
    return(
        <div>
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full absolute md:-bottom-2 -bottom-1 left-0 md:left-0 z-10" style={{backgroundColor: props.secondary}} id={props.id}></div>
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full absolute bottom-0 z-20" style={{backgroundColor: props.main}} id={props.id}></div>
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full absolute z-30 bg-slate-300 bottom-5 left-4 md:bottom-5 md:left-4" id={props.id}></div>
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full absolute z-30 bg-white bottom-4 left-4 md:bottom-4 md:left-4 z-40" id={props.id}></div>
            <img src={props.src} alt='sign' className="absolute z-50 top-16 left-11 md:right-12 md:top-12 h-12 md:h-16" id={props.id}/>
        </div>
    )
}

export default Button