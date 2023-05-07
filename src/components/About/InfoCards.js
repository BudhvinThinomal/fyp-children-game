import React from "react";
import "./InfoCards.css";
import InfoCardsItem from "./InfoCardsItem";
import { Typography } from "@mui/material";

function InfoCards() {
  return (
    <div className="InfoCards">
      <div className="InfoCards__container">
        <div className="InfoCards__wrapper">
          <ul className="InfoCards__items">
            <InfoCardsItem
              title={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "35px",
                    fontWeight: 600,
                  }}
                >
                  {"äiaf,laishd hkq l=ulao@"}
                  {/* What is dyslexia */}
                </Typography>
              }
              text={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  {
                    "äiaf,laishd lshùfï ÿ¾j,;djh f,io y÷kajkq ,nk w;r th NdIdj u; mokï jQ úfYaIs; bf.kSfï wdndOhls' äiaf,laishd hkq ñksiqkag úfYaIs; NdId l=i,;d\" úfYaIfhka lshùu iuÕ wr., lsÍug fya;= jk frda. ,laIK iuQyhls' äiaf,laishd iys; orejka idudkHfhka wlaIr úkHdih\" ,sùu iy jpk WÉpdrKh jeks fjk;a NdId yelshdjka iuÕ wr., lrhs' tys m%;sM,hla jYfhka\" äiaf,laisla frda.Ska i|yd lshùu ukao.dó iy wNsfhda.d;aul l%shdj,shla njg m;ajk w;r\" thg W;aidyhla wjYH jk w;r th p;=r l%shdj,shla fkdfõ' äiaf,laishd tla tla mqoa.,hdf.a Ôú; ld,h mqrdu n,mdhs' wOHhk ld¾h idOkh flfrys tys n,mEu fya;=fjka jvd;au mSvdjg m;a orejkag È.=ld,Sk wOHdmksl\" iudc úoHd;aul\" ufkdaúoHd;aul\" Ñ;a;fõ.Sh iy wd¾Ól wNsfhda.j,g uqyqK Èh yelsh'äiaf,laishd frda.fha f.da,Sh jHdma;sh ks;r újdohg ,lajk ud;Dldjls' úfYaIs; bf.kqï wdndO we;s orejka w;r\" tu orejkaf.ka 85] lg lshùfï iy NdId ieliSfï wdndOhla we;'"
                  }
                </Typography>
              }
            />
            <InfoCardsItem
              title={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "35px",
                    fontWeight: 600,
                  }}
                >
                  {"äia.%d*shd hkq l=ulao@"}
                  {/* What is dysgraphia */}
                </Typography>
              }
              text={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  {
                    "äia.%d*shd hkq ,sÅ; m%ldYkfha ÿ¾j,;d f,io ye¢kafjk w;r th mqoa.,hka ,sùug bf.k .kakd wdldrh iy ;ukaj m%ldY lsÍug ,sÅ; jpk Ndú;d lrk wdldrh flfrys n,mdk úfYaIs; bf.kqï wdndO j¾.hls' äia.%d*shd wlaIr úkHdifha w;a wl=re iy we;eï wjia:d iuÕ .eg¨‍ we;s lrhs' äia.%d*shd frda. ,laIK iuyrla kï wlaIr úkHdi ksrjoH;djh\" úrdu ,l=Kq iy jHdlrK ksrjoH;djh iy ,sÅ; m%ldYkh ixúOdkh lsÍuhs' fuu wdndOfhka jeämqru mSvdjg m;ajkafka <uhska jk w;r ,sÅ; m%ldYkfha ÿIalr;d fya;=fjka Tjqkaf.a wOHdmksl yd udkisl mßirh iïmQ¾Kfhkau lvdlmam,a jkq we;'"
                  }
                </Typography>
              }
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
