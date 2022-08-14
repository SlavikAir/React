import OfferItem from "./modules/OfferItem";

const NavOffer = ()=> {
    return(
        <div className="nav-offer">
            <OfferItem road="/firstCourses" name="ПЕРШІ СТРАВИ" />
            <OfferItem road="/salads" name="САЛАТИ" />
            <OfferItem road="/meat" name="М’ЯСО" />
            <OfferItem road="/fish" name="РИБА" />
            <OfferItem road="sideDishes" name="ГАРНІРИ" />
            <OfferItem road="/sauce" name="СОУСИ" />
            <OfferItem road="/drinks" name="НАПОЇ" />
        </div>
    )
}

export default NavOffer;