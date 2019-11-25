export function Details(data) {
  this.dormitory = data.dormitory || 0;
  this.garage = data.garage || 0;
  this.bathroom = data.bathroom || 0;
  this.living_room = data.living_room || 0;
  this.dining_room = data.dining_room || 0;
  this.suite = data.suite || 0;
  this.laundry = data.laundry || 0;
  this.washbasin = data.washbasin || 0;
  this.kitchen = data.kitchen || 0;
  this.gourmet_space = data.gourmet_space || 0;
  this.office = data.office || 0;

  return (
    this.dormitory,
    this.garage,
    this.bathroom,
    this.living_room,
    this.dining_room,
    this.suite,
    this.laundry,
    this.washbasin,
    this.kitchen,
    this.gourmet_space,
    this.office
  );
}


export function Features(data, id) {
  this.description = data.description || '';
  this.airConditioner = data.air_conditioning || false;
  this.pool = data.pool || false;
  this.balcony = data.balcony || false;
  this.barbecueGrill = data.barbecue_grill || false;
  this.stairway = data.stairway || false;
  this.garden = data.garden || false;
  this.fireSecurity = data.fire_security || false;
  this.cameraSecurity = data.camera_security || false;
  this.property_id = id || false;

  return (
    this.description,
    this.airConditioner,
    this.pool,
    this.balcony,
    this.barbecueGrill,
    this.stairway,
    this.garden,
    this.fireSecurity,
    this.cameraSecurity,
    this.property_id
  );
}

export function Info(data) {
  this.neighborhood_id = data.neighborhood_id || 0;
  this.position = data.position ? JSON.parse(data.position) : null;
  this.price = data.price || 0;
  this.purpose_id = Number(data.purpose_id) || 1;
  this.type_id = data.type_id || 0;
  this.area = data.area || 0;
  this.building_area = data.building_area || 0;
  this.exchange = data.exchange || false;
  this.building_loan = data.building_loan || false;
  this.isVisible = data.isvisible || true;
  this.creator_id = data.creator_id || 1;

  return (
    this.neighborhood_id,
    this.position,
    this.price,
    this.purpose_id,
    this.type_id,
    this.creator_id,
    this.area,
    this.building_area,
    this.exchange,
    this.building_loan,
    this.isVisible
  );
}
