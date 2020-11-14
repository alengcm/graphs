import Graph from "react-graph-vis";
// import Graph from "../../lib";

// import Graph from 'react-graph-vis'

import React from "react";
import { render } from "react-dom";
 

const graph = {
  nodes:[{"id":"T1","name":"Soil","color":"#68d468","Details":"Soil�is the thin layer of material covering the earth's surface and is formed from the weathering of rocks. It is made up mainly of mineral particles, organic materials, air, water and living organisms�all of which interact slowly yet constantly.","label":"Soil","export":" {id: ,label: '',color:''}, "},{"id":"T2","name":"Water","color":"#68d468","Details":"Water scarcity is a<U+200B> persistent issue in Australia given the relatively dry and variable climate and now the emergence of climate change. Water is a valuable commodity particularly within agriculture, which accounts for around three quarters of total use. Water is also of value to other industries, households and increasingly environmental agencies. Australia has a number of well-developed water markets, where water rights are freely traded between end users. Water markets allow Australia�s scarce water resources to be efficiently allocated between competing uses in response to fluctuations in supply and demand.","label":"Water","export":" {id: ,label: '',color:''}, "},{"id":"T3","name":"BioDiversity","color":"#68d468","Details":"Biodiversity is the variety and variability of life on Earth. Biodiversity is typically a measure of variation at the genetic, species, and ecosystem level. Terrestrial biodiversity is usually greater near the equator, which is the result of the warm climate and high primary productivity.�","label":"BioDiversity","export":" {id: ,label: '',color:''}, "},{"id":"T4","name":"Livestock","color":"#68d468","Details":"Livestock is commonly defined as domesticated animals raised in an agricultural setting to produce labor and commodities such as meat, eggs, milk, fur, leather, and wool.","label":"Livestock","export":" {id: ,label: '',color:''}, "},{"id":"T5","name":"Cropping","color":"#68d468","Details":"The term�cropping system�refers to the crops,�crop�sequences and management techniques used on a particular�agricultural�field over a period of years. It includes all spatial and temporal aspects of managing an�agricultural system.","label":"Cropping","export":" {id: ,label: '',color:''}, "},{"id":"T6","name":"Horticulture","color":"#68d468","Details":"Horticulture�(Hortus- garden, culture- cultivation) is the agriculture of plants, mainly for food, materials, comfort and beauty for decoration. Horticulturists apply knowledge, skills, and technologies to grow intensively produced plants for human food and non-food uses and for personal or social needs.","label":"Horticulture","export":" {id: ,label: '',color:''}, "},{"id":"T7","name":"BioSecurity","color":"#68d468","Details":"Biosecurity refers to measures aimed at preventing the introduction and/or spread of harmful organisms to animals and plants in order to minimize the risk of transmission of infectious disease.","label":"BioSecurity","export":" {id: ,label: '',color:''}, "},{"id":"D1","name":"Soil and Landscape Grid of Australia","color":"#e68f96","Details":"The CSIRO National Soil Site database (Natsoil) currently contains descriptions of over 21, 000 soil site investigations. The data includes morphological descriptions, chemical, physical and mineralogical properties and spectral predictions, along with soil specimen management data. The database and The Australian National Soil Archive provide the foundation for the development of a national soil spectral library and also support TERN Landscapes national soil property modelling through a federated collation of available soil databases.","label":"Soil and Landscape Grid of Australia","Source":"Soil and Land Information Australia","Summary":"Summary of Soil and Land Information Australia","export":" {id: ,label: '',color:''}, "},{"id":"D2","name":"WaterAustralia","color":"#e68f96","Details":"Water resources are natural resources of water that are potentially useful. Uses of water include agricultural, industrial, household, recreational and environmental activities. All living things require water to grow and reproduce","label":"WaterAustralia","Source":"WaterNSW, WaterVic,WaterQL, Water Australia","Summary":"Summary of WaterNSW, WaterVic,WaterQL, Water Australia","export":" {id: ,label: '',color:''}, "},{"id":"D3","name":"ABARES","color":"#e68f96","Details":"Production including the area planted or harvested, production and number of livestock or trees, Number of businesses, Gross value of p<U+200B>roduction, Water use, Land management practices","label":"ABARES","Source":"Australian Bureau of Agricultural and Resource Economics","Summary":"Summary of Australian Bureau of Agricultural and Resource Economics","export":" {id: ,label: '',color:''}, "},{"id":"D4","name":"Australian Plant Health","color":"#e68f96","Details":"Plant health, diseases and productivity","label":"Australian Plant Health","Source":"Australian Plant Health Database","Summary":"Summary of Australian Plant Health Database","export":" {id: ,label: '',color:''}, "},{"id":"D5","name":"Australian Rangeland Boundaries","color":"#e68f96","Details":"Field boundaries and attributes","label":"Australian Rangeland Boundaries","Source":"Australian Bureau of Agricultural and Resource Economics","Summary":"Summary of Australian Bureau of Agricultural and Resource Economics","export":" {id: ,label: '',color:''}, "},{"id":"D6","name":"Australian Faunal Directory","color":"#e68f96","Details":"Fauna is all of the animal life present in a particular region or time. The corresponding term for plants is flora. Flora, fauna and other forms of life such as fungi are collectively referred to as biota.","label":"Australian Faunal Directory","Source":"Environment Australia","Summary":"Summary of Environment Australia","export":" {id: ,label: '',color:''}, "},{"id":"D7","name":"Flora of Australia Online","color":"#e68f96","Details":"Flora is all the plant life present in a particular region or time, generally the naturally occurring native plants. The corresponding term for animal life is fauna. Flora, fauna, and other forms of life, such as fungi, are collectively referred to as biota.","label":"Flora of Australia Online","Source":"Collaborative Australian Protected Area Database","Summary":"Summary of Collaborative Australian Protected Area Database","export":" {id: ,label: '',color:''}, "},{"id":"D8","name":"Botanical Databases","color":"#e68f96","Details":"Australian Biological Resources Study � botanical descriptions of the flora of Australia.","label":"Botanical Databases","Source":"Sydney university","Summary":"Summary of Sydney university","export":" {id: ,label: '',color:''}, "},{"id":"D9","name":"National Vegetation Information System","color":"#e68f96","Details":"The NVIS�Information�Hierarchy is a system for describing the structural and floristic patterns of groups of plants in the landscape. Collectively, the different levels in the classification provide a description of�vegetation�that can be directly related to precise spatial areas as a�vegetation�map.","label":"National Vegetation Information System","Source":"Environment Australia","Summary":"Summary of Environment Australia","export":" {id: ,label: '',color:''}, "},{"id":"D10","name":"Weeds in Australia","color":"#e68f96","Details":"Data set provides information on 77 of the more troublesome weeds found in Australia agriculture and horticulture","label":"Weeds in Australia","Source":"Collaborative Australian Protected Area Database","Summary":"Summary of Collaborative Australian Protected Area Database","export":" {id: ,label: '',color:''}, "},{"id":"A1","name":"Soil Depth","color":"#e8d166","label":"Soil Depth","export":" {id: ,label: '',color:''}, "},{"id":"A2","name":"Soil Texture","color":"#e8d166","label":"Soil Texture","export":" {id: ,label: '',color:''}, "},{"id":"A3","name":"Available Water Capacity","color":"#e8d166","label":"Available Water Capacity","export":" {id: ,label: '',color:''}, "},{"id":"A4","name":"Bulk Density","color":"#e8d166","label":"Bulk Density","export":" {id: ,label: '',color:''}, "},{"id":"A5","name":"Depth of Regolith","color":"#e8d166","label":"Depth of Regolith","export":" {id: ,label: '',color:''}, "},{"id":"A6","name":"Diseases and Nematodes","color":"#e8d166","label":"Diseases and Nematodes","export":" {id: ,label: '',color:''}, "},{"id":"A7","name":"Total organic carbon","color":"#e8d166","label":"Total organic carbon","export":" {id: ,label: '',color:''}, "},{"id":"A8","name":"Microbial biomass","color":"#e8d166","label":"Microbial biomass","export":" {id: ,label: '',color:''}, "},{"id":"A9","name":"Total Phosphorus","color":"#e8d166","label":"Total Phosphorus","export":" {id: ,label: '',color:''}, "},{"id":"A10","name":"Soil Nitrogen Supply","color":"#e8d166","label":"Soil Nitrogen Supply","export":" {id: ,label: '',color:''}, "},{"id":"A11","name":"Effective Cation Exchange Capacity","color":"#e8d166","label":"Effective Cation Exchange Capacity","export":" {id: ,label: '',color:''}, "},{"id":"A12","name":"Soil Acidity","color":"#e8d166","label":"Soil Acidity","export":" {id: ,label: '',color:''}, "},{"id":"A13","name":"pH","color":"#e8d166","label":"pH","export":" {id: ,label: '',color:''}, "},{"id":"A15","name":"Net Inflow 24h","color":"#e8d166","label":"Net Inflow 24h","export":" {id: ,label: '',color:''}, "},{"id":"A16","name":"Rainfall","color":"#e8d166","label":"Rainfall","export":" {id: ,label: '',color:''}, "},{"id":"A17","name":"Storage Rel. 24h","color":"#e8d166","label":"Storage Rel. 24h","export":" {id: ,label: '',color:''}, "},{"id":"A18","name":"Evaporation","color":"#e8d166","label":"Evaporation","export":" {id: ,label: '',color:''}, "},{"id":"A19","name":"Level","color":"#e8d166","label":"Level","export":" {id: ,label: '',color:''}, "},{"id":"A20","name":"Discharge","color":"#e8d166","label":"Discharge","export":" {id: ,label: '',color:''}, "},{"id":"A21","name":"Outflows","color":"#e8d166","label":"Outflows","export":" {id: ,label: '',color:''}, "},{"id":"A22","name":"Electrical Conductivity","color":"#e8d166","label":"Electrical Conductivity","export":" {id: ,label: '',color:''}, "},{"id":"A23","name":"Water Temperature","color":"#e8d166","label":"Water Temperature","export":" {id: ,label: '',color:''}, "},{"id":"A24","name":"Bore Level","color":"#e8d166","label":"Bore Level","export":" {id: ,label: '',color:''}, "},{"id":"A25","name":"Groundwater Elevation","color":"#e8d166","label":"Groundwater Elevation","export":" {id: ,label: '',color:''}, "},{"id":"A26","name":"Population (farms)","color":"#e8d166","label":"Population (farms)","export":" {id: ,label: '',color:''}, "},{"id":"A27","name":"Sample (farms)","color":"#e8d166","label":"Sample (farms)","export":" {id: ,label: '',color:''}, "},{"id":"A28","name":"Total area irrigated (ha)","color":"#e8d166","label":"Total area irrigated (ha)","export":" {id: ,label: '',color:''}, "},{"id":"A29","name":"Area operated at 30 June (ha)","color":"#e8d166","label":"Area operated at 30 June (ha)","export":" {id: ,label: '',color:''}, "},{"id":"A30","name":"Age of owner manager (years)","color":"#e8d166","label":"Age of owner manager (years)","export":" {id: ,label: '',color:''}, "},{"id":"A31","name":"Cows mated (no.)","color":"#e8d166","label":"Cows mated (no.)","export":" {id: ,label: '',color:''}, "},{"id":"A32","name":"Beef bulls at 30 June (no.)","color":"#e8d166","label":"Beef bulls at 30 June (no.)","export":" {id: ,label: '',color:''}, "},{"id":"A33","name":"Beef calves at 30 June (no.)","color":"#e8d166","label":"Beef calves at 30 June (no.)","export":" {id: ,label: '',color:''}, "},{"id":"A34","name":"Beef cows at 30 June (no.)","color":"#e8d166","label":"Beef cows at 30 June (no.)","export":" {id: ,label: '',color:''}, "},{"id":"A35","name":"Beef cattle transferred in (no.)","color":"#e8d166","label":"Beef cattle transferred in (no.)","export":" {id: ,label: '',color:''}, "},{"id":"A36","name":"Beef cattle transferred out (no.)","color":"#e8d166","label":"Beef cattle transferred out (no.)","export":" {id: ,label: '',color:''}, "},{"id":"A37","name":"Steers and other beef cattle at 30 June (no.)","color":"#e8d166","label":"Steers and other beef cattle at 30 June (no.)","export":" {id: ,label: '',color:''}, "},{"id":"A40","name":"Wheat Production","color":"#e8d166","label":"Wheat Production","export":" {id: ,label: '',color:''}, "},{"id":"A41","name":"Barley Production","color":"#e8d166","label":"Barley Production","export":" {id: ,label: '',color:''}, "},{"id":"A42","name":"Canola Production","color":"#e8d166","label":"Canola Production","export":" {id: ,label: '',color:''}, "},{"id":"A43","name":"Chickpeas Production","color":"#e8d166","label":"Chickpeas Production","export":" {id: ,label: '',color:''}, "},{"id":"A44","name":"Faba beans Production","color":"#e8d166","label":"Faba beans Production","export":" {id: ,label: '',color:''}, "},{"id":"A45","name":"Field peas Production","color":"#e8d166","label":"Field peas Production","export":" {id: ,label: '',color:''}, "},{"id":"A46","name":"Lentils Production","color":"#e8d166","label":"Lentils Production","export":" {id: ,label: '',color:''}, "},{"id":"A47","name":"Lupins Production","color":"#e8d166","label":"Lupins Production","export":" {id: ,label: '',color:''}, "},{"id":"A48","name":"Oats Production","color":"#e8d166","label":"Oats Production","export":" {id: ,label: '',color:''}, "},{"id":"A49","name":"Triticale Production","color":"#e8d166","label":"Triticale Production","export":" {id: ,label: '',color:''}, "},{"id":"A50","name":"Summer crops Production","color":"#e8d166","label":"Summer crops Production","export":" {id: ,label: '',color:''}, "}],
  edges: [{"from":"A1","to":"A5"},{"from":"A7","to":"A11"},{"from":"A12","to":"A13"},{"from":"A19","to":"A24"},{"from":"A20","to":"A21"},{"from":"A26","to":"A31"},{"from":"A26","to":"A32"},{"from":"A26","to":"A33"},{"from":"A26","to":"A34"},{"from":"A26","to":"A35"},{"from":"A26","to":"A36"},{"from":"A26","to":"A37"},{"from":"T1","to":"A1"},{"from":"T1","to":"A10"},{"from":"T1","to":"A12"},{"from":"T1","to":"A2"},{"from":"T1","to":"A3"},{"from":"T1","to":"A4"},{"from":"T1","to":"A6"},{"from":"T1","to":"A7"},{"from":"T1","to":"A8"},{"from":"T1","to":"A9"},{"from":"T2","to":"A15"},{"from":"T2","to":"A16"},{"from":"T2","to":"A17"},{"from":"T2","to":"A18"},{"from":"T2","to":"A19"},{"from":"T2","to":"A20"},{"from":"T2","to":"A22"},{"from":"T2","to":"A23"},{"from":"T2","to":"A25"},{"from":"T3","to":"A29"},{"from":"T3","to":"A31"},{"from":"T3","to":"A33"},{"from":"T3","to":"A44"},{"from":"T3","to":"A49"},{"from":"T4","to":"A27"},{"from":"T4","to":"A28"},{"from":"T4","to":"A29"},{"from":"T4","to":"A30"},{"from":"T5","to":"A40"},{"from":"T5","to":"A41"},{"from":"T5","to":"A42"},{"from":"T5","to":"A43"},{"from":"T5","to":"A44"},{"from":"T5","to":"A45"},{"from":"T5","to":"A46"},{"from":"T5","to":"A47"},{"from":"T5","to":"A48"},{"from":"T5","to":"A49"},{"from":"T5","to":"A50"},{"from":"T6","to":"A44"},{"from":"T6","to":"A45"},{"from":"T6","to":"A46"},{"from":"T6","to":"A47"},{"from":"T6","to":"A48"},{"from":"T7","to":"A28"},{"from":"T7","to":"A30"},{"from":"T7","to":"A32"},{"from":"T7","to":"A34"},{"from":"T7","to":"A50"},{"from":"A1","to":"D1"},{"from":"A2","to":"D1"},{"from":"A2","to":"D3"},{"from":"A3","to":"D1"},{"from":"A3","to":"D2"},{"from":"A4","to":"D1"},{"from":"A5","to":"D1"},{"from":"A6","to":"D1"},{"from":"A7","to":"D1"},{"from":"A8","to":"D1"},{"from":"A9","to":"D1"},{"from":"A10","to":"D1"},{"from":"A11","to":"D1"},{"from":"A12","to":"D1"},{"from":"A13","to":"D1"},{"from":"A15","to":"D2"},{"from":"A16","to":"D2"},{"from":"A17","to":"D2"},{"from":"A18","to":"D2"},{"from":"A19","to":"D2"},{"from":"A20","to":"D2"},{"from":"A21","to":"D2"},{"from":"A22","to":"D2"},{"from":"A23","to":"D2"},{"from":"A24","to":"D2"},{"from":"A25","to":"D2"},{"from":"A26","to":"D3"},{"from":"A27","to":"D3"},{"from":"A28","to":"D3"},{"from":"A29","to":"D3"},{"from":"A30","to":"D3"},{"from":"A31","to":"D3"},{"from":"A32","to":"D3"},{"from":"A33","to":"D3"},{"from":"A34","to":"D3"},{"from":"A35","to":"D3"},{"from":"A36","to":"D3"},{"from":"A37","to":"D3"},{"from":"A40","to":"D4"},{"from":"A40","to":"D8"},{"from":"A41","to":"D5"},{"from":"A41","to":"D6"},{"from":"A41","to":"D9"},{"from":"A42","to":"D10"},{"from":"A42","to":"D6"},{"from":"A42","to":"D7"},{"from":"A43","to":"D4"},{"from":"A43","to":"D7"},{"from":"A43","to":"D8"},{"from":"A44","to":"D5"},{"from":"A44","to":"D8"},{"from":"A44","to":"D9"},{"from":"A45","to":"D10"},{"from":"A45","to":"D6"},{"from":"A45","to":"D9"},{"from":"A46","to":"D10"},{"from":"A46","to":"D7"},{"from":"A47","to":"D4"},{"from":"A47","to":"D8"},{"from":"A48","to":"D5"},{"from":"A49","to":"D7"},{"from":"A50","to":"D8"}]
};

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  },
  height: "650px"
};
 

render(
  
  <div>
 
    <Graph graph={graph} options={options}     />
    , 
  </div>,
  document.getElementById("root")
);
 
