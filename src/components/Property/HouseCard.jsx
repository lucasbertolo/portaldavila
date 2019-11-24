/* eslint-disable no-restricted-globals */
import React from "react";

import { LazyLoadComponent } from "react-lazy-load-image-component";

import Link from "next/link";

import CardInfo from "./CardInfo";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardIcons from "./CardIcons";

import enums from "../../content/enums";
import PlaceHolderCard from "../Helpers/Loading";

import "./HouseCard.scss";

const HouseCard = React.memo(({ data, user, selectList, isFav, manager }) => {
  const {
    cdn,
    url,
    price,
    type_id,
    neighborhood_id,
    purpose_id,
    garage,
    dormitory,
    area,
    bathroom,
    property_id
  } = data;

  const defineRoute = () => {
    let route = "";
    if (user && user.type_id === enums.userType.consultant && manager) {
      route = "/manager";
    } else {
      route = "/property-description";
    }

    return route;
  };

  const link = defineRoute();

  return (
    <Link
      href={{
        pathname: link,
        query: {
          id: property_id
        }
      }}
    >
      <article className="card">
        <CardHeader code={property_id} isFav={isFav} />
        <LazyLoadComponent placeholder={<PlaceHolderCard />}>
          <CardImage url={cdn || url} />
        </LazyLoadComponent>
        <CardInfo
          typeId={type_id}
          price={price}
          blockId={neighborhood_id}
          purposeId={purpose_id}
          selectList={selectList}
        />
        <CardIcons
          garage={garage}
          dormitory={dormitory}
          area={area}
          bathroom={bathroom}
        />
      </article>
    </Link>
  );
});

export default HouseCard;
