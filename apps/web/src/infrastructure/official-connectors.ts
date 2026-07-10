import { createConnectorDefinition } from "./connector-utils";

export const officialConnectors = [
  createConnectorDefinition(
    "Airservices Australia AIP Portal",
    "Australia",
    "YX",
    "https://www.airservicesaustralia.com/aip/aip.asp",
  ),
  createConnectorDefinition(
    "AIP New Zealand Portal",
    "New Zealand",
    "NZ",
    "https://www.aip.net.nz/",
  ),
  createConnectorDefinition(
    "FAA Digital Products",
    "United States",
    "K",
    "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/search/",
  ),
];
