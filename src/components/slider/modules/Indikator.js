import "./modules.css";

const Indikator = ({count}) => {

    let ind = document.querySelectorAll('.indikator')

    for ( let i = 0; i< ind.length; i++) {
        ind[i].classList.remove('back-act');
        if ( i === count) {
            ind[i].classList.add('back-act')  
        }
    }

    return (
        <div className="indikator-block">
            < div id="ind" className="indikator back-act" />
            < div id="ind" className="indikator" />
            < div id="ind" className="indikator" />
            < div id="ind" className="indikator" />
            < div id="ind" className="indikator" />
        </div>
    )
}

export default Indikator;