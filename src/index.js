import Graph from "react-graph-vis";
// import Graph from "../../lib";

// import Graph from 'react-graph-vis'

import React from "react";
import { render } from "react-dom";
 

const graph = {
  nodes: [  {id:1 ,label: 'Soil',color:'#008080'}, 
  {id:2 ,label: 'Water',color:'#008080'}, 
  {id:3 ,label: 'BioDiversity',color:'#008080'}, 
  {id:4 ,label: 'Livestock',color:'#008080'}, 
  {id:5 ,label: 'Cropping',color:'#008080'}, 
  {id:6 ,label: 'Horticulture',color:'#008080'}, 
  {id:7 ,label: 'BioSecurity',color:'#008080'}, 
  {id:8 ,label: 'Dams',color:'#008080'}, 
  {id:9 ,label: 'Rivers and Streams',color:'#008080'}, 
  {id:10 ,label: 'Groundwater',color:'#008080'}, 
  {id:1000 ,label: 'Soil and Landscape Grid of Australia',color:'#e0df41'}, 
  {id:1001 ,label: 'MLA',color:'#e0df41'}, 
  {id:1002 ,label: 'Species Profile and Threats Database',color:'#e0df41'}, 
  {id:1003 ,label: 'Collaborative Australian Protected Area Database',color:'#e0df41'}, 
  {id:1004 ,label: 'Species of National Environmental Significance',color:'#e0df41'}, 
  {id:1005 ,label: 'Ecological Communities of National Environmental Significance',color:'#e0df41'}, 
  {id:1006 ,label: 'Protected Matters Search Tool',color:'#e0df41'}, 
  {id:1007 ,label: 'Australia - Species of National Environmental Significance Database (Public Grids)',color:'#e0df41'}, 
  {id:1008 ,label: 'Australia - Ecological Communities of National Environmental Significance Database (Public Grids)',color:'#e0df41'}, 
  {id:1009 ,label: 'Interim Biogeographic Regionalisation for Australia (IBRA), Version 7 (Regions)',color:'#e0df41'}, 
  {id:1010 ,label: 'Indigenous Protected Areas (IPA) - Dedicated',color:'#e0df41'}, 
  {id:1011 ,label: 'Collaborative Australian Protected Areas Database (CAPAD)',color:'#e0df41'}, 
  {id:1012 ,label: 'Australian Rangeland Boundaries',color:'#e0df41'}, 
  {id:1013 ,label: 'Australian Faunal Directory',color:'#e0df41'}, 
  {id:1014 ,label: 'Flora of Australia Online',color:'#e0df41'}, 
  {id:1015 ,label: 'Botanical Databases',color:'#e0df41'}, 
  {id:1016 ,label: 'National Vegetation Information System',color:'#e0df41'}, 
  {id:1017 ,label: 'Weeds in Australia',color:'#e0df41'}, 
  {id:1018 ,label: 'Agricultural Chemical Usage Database',color:'#e0df41'}, 
  {id:1019 ,label: 'Australia s bioregions (IBRA)',color:'#e0df41'}, 
  {id:1020 ,label: 'Atlasof Living Australia',color:'#e0df41'}, 
  {id:100 ,label: 'Soil Depth',color:'#00FF00'}, 
  {id:101 ,label: 'Soil Texture',color:'#00FF00'}, 
  {id:102 ,label: 'Available Water Capacity',color:'#00FF00'}, 
  {id:103 ,label: 'Bulk Density',color:'#00FF00'}, 
  {id:104 ,label: 'Depth of Regolith',color:'#00FF00'}, 
  {id:105 ,label: 'Diseases and Nematodes',color:'#00FF00'}, 
  {id:106 ,label: 'Total organic carbon',color:'#00FF00'}, 
  {id:107 ,label: 'Microbial biomass',color:'#00FF00'}, 
  {id:108 ,label: 'Total Phosphorus',color:'#00FF00'}, 
  {id:109 ,label: 'Soil Nitrogen Supply',color:'#00FF00'}, 
  {id:110 ,label: 'Effective Cation Exchange Capacity',color:'#00FF00'}, 
  {id:111 ,label: 'Soil Acidity',color:'#00FF00'}, 
  {id:112 ,label: 'pH',color:'#00FF00'}, 
  {id:113 ,label: 'Erodibility',color:'#00FF00'}, 
  {id:114 ,label: 'Site Number',color:'#00FF00'}, 
  {id:115 ,label: 'Site Name',color:'#00FF00'}, 
  {id:116 ,label: 'Levels',color:'#00FF00'}, 
  {id:117 ,label: '% Effective Full Storage',color:'#00FF00'}, 
  {id:118 ,label: 'Volume',color:'#00FF00'}, 
  {id:119 ,label: 'Net Inflow 24h',color:'#00FF00'}, 
  {id:120 ,label: 'Rainfall',color:'#00FF00'}, 
  {id:121 ,label: 'Storage Rel. 24h',color:'#00FF00'}, 
  {id:122 ,label: 'Evaporation',color:'#00FF00'}, 
  {id:123 ,label: 'Level',color:'#00FF00'}, 
  {id:124 ,label: 'Discharge',color:'#00FF00'}, 
  {id:125 ,label: 'Outflows',color:'#00FF00'}, 
  {id:126 ,label: 'Electrical Conductivity',color:'#00FF00'}, 
  {id:127 ,label: 'Water Temperature',color:'#00FF00'}, 
  {id:128 ,label: 'Bore Level',color:'#00FF00'}, 
  {id:129 ,label: 'Groundwater Elevation',color:'#00FF00'}, 
  {id:130 ,label: 'Population (farms)',color:'#00FF00'}, 
  {id:131 ,label: 'Sample (farms)',color:'#00FF00'}, 
  {id:132 ,label: 'Total area irrigated (ha)',color:'#00FF00'}, 
  {id:133 ,label: 'Area operated at 30 June (ha)',color:'#00FF00'}, 
  {id:134 ,label: 'Age of owner manager (years)',color:'#00FF00'}, 
  {id:135 ,label: 'Cows mated (no.)',color:'#00FF00'}, 
  {id:136 ,label: 'Beef bulls at 30 June (no.)',color:'#00FF00'}, 
  {id:137 ,label: 'Beef calves at 30 June (no.)',color:'#00FF00'}, 
  {id:138 ,label: 'Beef cows at 30 June (no.)',color:'#00FF00'}, 
  {id:139 ,label: 'Beef cattle transferred in (no.)',color:'#00FF00'}, 
  {id:140 ,label: 'Beef cattle transferred out (no.)',color:'#00FF00'}, 
  {id:141 ,label: 'Steers and other beef cattle at 30 June (no.)',color:'#00FF00'}, 
  {id:142 ,label: 'KT Production',color:'#00FF00'}, 
  {id:143 ,label: 'Quartely Prices',color:'#00FF00'}, 
  {id:144 ,label: 'Wheat Production',color:'#00FF00'}, 
  {id:145 ,label: 'Barley Production',color:'#00FF00'}, 
  {id:146 ,label: 'Canola Production',color:'#00FF00'}, 
  {id:147 ,label: 'Chickpeas Production',color:'#00FF00'}, 
  {id:148 ,label: 'Faba beans Production',color:'#00FF00'}, 
  {id:149 ,label: 'Field peas Production',color:'#00FF00'}, 
  {id:150 ,label: 'Lentils Production',color:'#00FF00'}, 
  {id:151 ,label: 'Lupins Production',color:'#00FF00'}, 
  {id:152 ,label: 'Oats Production',color:'#00FF00'}, 
  {id:153 ,label: 'Triticale Production',color:'#00FF00'}, 
  {id:154 ,label: 'Summer crops Production',color:'#00FF00'}, 
  {id:155 ,label: 'Grain sorghum Production',color:'#00FF00'}, 
  {id:156 ,label: 'Cottonseed Production',color:'#00FF00'}, 
  {id:157 ,label: 'Cotton lint  Production',color:'#00FF00'}, 
  {id:158 ,label: 'Rice Production',color:'#00FF00'}, 
  {id:159 ,label: 'Corn (maize) Production',color:'#00FF00'}, 
  {id:160 ,label: 'Soybeans Production',color:'#00FF00'}, 
  {id:161 ,label: 'Sunflower Production',color:'#00FF00'} 
 
  
  ],
  edges: [{from:1,to:102},
    {from:1,to:103},
    {from:1,to:103},
    {from:1,to:104},
    {from:1,to:105},
    {from:1,to:110},
    {from:1,to:113},
    {from:1,to:107},
    {from:1,to:111},
    {from:1,to:100},
    {from:1,to:109},
    {from:1,to:101},
    {from:1,to:108},
    {from:1,to:106},
    {from:1,to:112},
    {from:4,to:134},
    {from:4,to:133},
    {from:4,to:136},
    {from:4,to:137},
    {from:4,to:139},
    {from:4,to:140},
    {from:4,to:138},
    {from:4,to:135},
    {from:4,to:130},
    {from:4,to:131},
    {from:4,to:141},
    {from:4,to:132},
    {from:8,to:117},
    {from:8,to:122},
    {from:8,to:116},
    {from:8,to:119},
    {from:8,to:120},
    {from:8,to:115},
    {from:8,to:114},
    {from:8,to:121},
    {from:8,to:118},
    {from:9,to:124},
    {from:9,to:124},
    {from:9,to:126},
    {from:9,to:123},
    {from:9,to:123},
    {from:9,to:120},
    {from:9,to:115},
    {from:9,to:115},
    {from:9,to:114},
    {from:9,to:114},
    {from:9,to:127},
    {from:10,to:128},
    {from:10,to:129},
    {from:10,to:125},
    {from:10,to:120},
    {from:10,to:120},
    {from:10,to:115},
    {from:10,to:115},
    {from:10,to:114},
    {from:10,to:114},
    {from:1000,to:1},
    {from:1001,to:4},
    {from:1001,to:1},
    {from:1001,to:1},
    {from:1001,to:1},
    {from:1001,to:1},
    {from:1001,to:1},
    {from:1001,to:1},
    {from:1001,to:2},
    {from:1001,to:2},
    {from:1001,to:2},
    {from:1001,to:2},
    {from:1001,to:2},
    {from:1001,to:2} 
    
    ]
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
    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
  </div>,
  document.getElementById("root")
);
 
