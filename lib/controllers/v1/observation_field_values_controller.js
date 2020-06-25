const { observation_field_values } = require( "inaturalistjs" ); // eslint-disable-line camelcase
const InaturalistAPI = require( "../../inaturalist_api" );

const ObservationFieldValuesController = class ObservationFieldValuesController {
  static async create( req ) {
    return InaturalistAPI.iNatJSWrap( observation_field_values.create, req );
  }

  static async bulk( req ) {
    const body = req.body;
    if (body.constructor !== Array) {
      const e = new Error( );
      e.status = 400;
      e.custom_message = "body must be JS array";
      throw e;
    }
    const result = [];
    for (const curr of body) {
      try {
      const resp = await InaturalistAPI.iNatJSWrap( observation_field_values.create, {
        ...req,
        body: curr,
      } );
      result.push(resp);
      } catch (err) {
        // TODO should we shortcircuit on error, or continue?
        result.push({error: err.message, status: err.response.status});
      }
    }
    return result;
  }

  static async update( req ) {
    return InaturalistAPI.iNatJSWrap( observation_field_values.update, req );
  }

  static async delete( req ) {
    return InaturalistAPI.iNatJSWrap( observation_field_values.delete, req );
  }
};

module.exports = ObservationFieldValuesController;
