const { trips } = require( "inaturalistjs" );
const InaturalistAPI = require( "../../inaturalist_api" );

const TripsController = class TripsController {
  static async index( req ) {
    return InaturalistAPI.iNatJSWrap( trips.search, req );
  }

  // FIXME do we need this one?
  static async for_user( req ) { // eslint-disable-line camelcase
    return InaturalistAPI.iNatJSWrap( trips.for_user, req );
  }

  static create( req ) {
    return InaturalistAPI.iNatJSWrap( trips.create, req );
  }

  static update( req ) {
    return InaturalistAPI.iNatJSWrap( trips.update, req );
  }

  static delete( req ) {
    return InaturalistAPI.iNatJSWrap( trips.delete, req );
  }
};

module.exports = TripsController;
