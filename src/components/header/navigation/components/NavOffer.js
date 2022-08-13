import OfferItem from "./modules/OfferItem";

const NavOffer = ()=> {
    return(
        <div className="nav-offer">
            <OfferItem road="/firstCourses" name="ПЕРШІ СТРАВИ" />
            <OfferItem road="/salads" name="САЛАТИ" />
            <OfferItem road="/meat" name="М’ЯСО" />
            <OfferItem road="" name="РИБА" />
            <OfferItem road="" name="ГАРНІРИ" />
            <OfferItem road="" name="СОУСИ" />
            <OfferItem road="" name="НАПОЇ" />
        </div>
    )
}

export default NavOffer;